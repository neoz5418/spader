export const setTheme = (theme: string): void => {
    localStorage.setItem("theme", theme);
};

export const getTheme = (): string | null => {
    return typeof localStorage === "object"
        ? localStorage.getItem("theme")
        : "light";
};