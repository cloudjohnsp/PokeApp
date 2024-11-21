export const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

export const signOut = (): void => {
  document.cookie =
    'auth_cookie=; Max-Age=0; path=/; domain=' + location.hostname;
};
