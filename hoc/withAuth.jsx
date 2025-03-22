import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export function withAuth(Component) {
  return function ProtectedComponent(props) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (user === undefined) return;

      if (!user) {
        router.replace("/login");
      }
    }, [user, router]);

    return user ? <Component {...props} /> : null;
  };
}
