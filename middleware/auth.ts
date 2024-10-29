export default defineNuxtRouteMiddleware((to, from) => {
    const { status: authStatus } = useAuth();

    const isLoggedIn = authStatus.value === "authenticated";
    const isPublicRoute = to.path === "/";
    const routeExists = to.matched.length > 0;

    if (!routeExists) return;

    if (!isLoggedIn && !isPublicRoute) {
        return navigateTo("/");
    }
})
