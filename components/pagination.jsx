"use client";
import React, { memo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useFilters } from "@/context/FilterContext";

export const OrdersPagination = memo(({ itemsCount }) => {
  const { state: filters, setFilters } = useFilters();

  const pages = Math.ceil(itemsCount / filters.limit);
  const page = Math.floor(filters.offset / filters.limit) + 1;

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pages) return;
    setFilters({ ...filters, offset: (newPage - 1) * parseInt(filters.limit) });
  };

  const handleLimitChange = (e) => {
    const newValue = e.target.value;

    if (newValue === "") {
      setFilters({ ...filters, limit: 1, offset: 0 });
      return;
    }

    const parsedLimit = parseInt(newValue, 10);
    if (isNaN(parsedLimit) || parsedLimit <= 0) {
      setFilters({ ...filters, limit: 30, offset: 0 });
      return;
    }

    setFilters({ ...filters, limit: parsedLimit, offset: 0 });
  };

  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <Label className="mr-2 text-sm w-[17ch]">Wyników na stronie:</Label>
        <Input
          type="number"
          value={filters.limit}
          onChange={handleLimitChange}
          className="w-16"
        />
      </div>
      {pages > 1 && (
        <Pagination className="justify-normal flex-initial mx-0 w-fit">
          <PaginationContent>
            <PaginationItem onClick={() => handlePageChange(page - 1)}>
              <PaginationPrevious href="#" />
            </PaginationItem>

            {page - 2 > 0 && (
              <PaginationItem onClick={() => handlePageChange(1)}>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
            )}
            {page - 2 > 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page > 1 && (
              <PaginationItem onClick={() => handlePageChange(page - 1)}>
                <PaginationLink href="#">{page - 1}</PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>

            {page + 1 < pages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page < pages && (
              <PaginationItem onClick={() => handlePageChange(pages)}>
                <PaginationLink href="#">{pages}</PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem onClick={() => handlePageChange(page + 1)}>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
});
