import { getServerSession } from '#auth';

export default eventHandler(async (event) => {
    const protectedPaths = ["/api"];
    const isProtectedRoute = protectedPaths.some((path) => event.path.startsWith(path));

    if (isProtectedRoute) {
        const session = await getServerSession(event);
        if (!session) {
            throw createError({
                statusMessage: 'Unauthenticated',
                statusCode: 403
            });
        }
    }
});