export function extractProductDetails(data) {
  return data.reduce((acc, order) => {
    const existing = acc.find(
      (product) => product.barcode === order.productBarcode
    );

    if (!existing) {
      acc.push({
        name: order.productName,
        barcode: order.productBarcode,
        model: order.productModel,
        price: parseFloat(order.productPrice),
      });
    }

    return acc;
  }, []);
}

export function parseOrderData(data, productData, statusData) {
  return data.map((order) => {
    const products = order.products.map(({ id, quantity }) => {
      const product = productData.find((prod) => prod.id === id);

      return {
        id: id,
        name: product.name,
        model: product.model,
        price: product.price_netto,
        tax: product.tax,
        weight: product.weight,
        quantity: quantity,
      };
    });

    const status = statusData.find((status) => status.id === order.status_id);

    return {
      ...order,
      products: products,
      status: status.name,
    };
  });
}

export function getURL(shopName, resource, params = null) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const filterParams = params ? "?" + params : "";
  const uri = decodeURIComponent(`${resource}/${shopName}${filterParams}`);

  return `${url}/${uri}`;
}

export function parseName(name, sep = "-") {
  return name
    .split(sep)
    .map((word) => capitalize(word))
    .join(sep);
}

export function capitalize(rawWord) {
  const word = rawWord.toLowerCase();
  const firstLetter = word.charAt(0);
  const restLetters = word.slice(1);

  return firstLetter.toUpperCase() + restLetters;
}

// function, that parses date from 2023-01-01T07:29:09.999Z format to 2023-01-01 format
export function parseDateGMT(date) {
  const [year, month, day] = date.split("T")[0].split("-");

  return `${year}-${month}-${day}`;
}

export function parseDate(date) {
  return date.split(" ")[0];
}

// function that parses phone number from 123123123 to 123 123 123 format or from 12123123123 to +12 123 123 123 format
export function parsePhoneNumber(rawPhone) {
  const phone = rawPhone.toString();
  if (phone.length === 9) {
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
  } else {
    return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
  }
}

export function parseStatus(status) {
  const statusMap = {
    "Przyjęto zamówienie": "Przyjęto",
    "W trakcie realizacji": "Realizacja",
    "Zamówienie zrealizowane": "Zrealizowane",
    "Zamówienie anulowane": "Anulowane",
  };

  return statusMap[status] || status;
}
