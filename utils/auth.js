export const getUserFromCookies = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userToken="))
    ?.split("=")[1];

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return { name: payload.name, token: token, id: payload.id };
    } catch (error) {
      console.error("Nieprawidłowy token uwierzytelniający");
      return null;
    }
  }
  return null;
};

export const clearUserSession = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    const result = await response.json();
    if (!result.error) {
      document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      return result;
    } else {
      return result.error;
    }
  } catch (error) {
    return null;
  }
};
