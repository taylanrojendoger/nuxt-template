// Next & Nuxt Auth
import GoogleProvider from 'next-auth/providers/google';
import { NuxtAuthHandler } from '#auth';

// Models
import { User } from "@/server/models/user";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GoogleProvider.default({
      clientId: useRuntimeConfig().clientId,
      clientSecret: useRuntimeConfig().clientSecret
    })
  ],
  session: {
    maxAge: 60 * 60 * 24 * 7
  },
  jwt: {
    maxAge: 60 * 60 * 12
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user) {
        return false;
      }

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          createdAt: new Date()
        });
      }
      return true;
    }
  }
});