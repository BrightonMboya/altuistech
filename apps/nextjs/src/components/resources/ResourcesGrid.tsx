// import { getServerAuthSession, type Session } from '@repo/auth/server';
import { prisma } from "@repo/db";

import { api } from "~/utils/api";
// import { withUnstableCache } from '~/utils/withUnstableCache';
import { ResourceCard } from "./ResourceCard";
import Spinner from "@repo/ui/components/Spinner";



export function ResourcesGrid() {
  //   const session = await getServerAuthSession();


  const { data, isLoading } = api.resources.all.useQuery();

  return (
    <div className="container flex items-center justify-between gap-3">
      <section className="grid w-full grid-flow-row grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {data?.map((resource: any) => (
          <ResourceCard key={`${resource.id}`} resource={resource} />
        ))}
        {isLoading
         && <Spinner/>
        }
      </section>
    </div>
  );
}

// export type Tracks = Awaited<ReturnType<typeof getTracks>>;

// async function getTracks(session: Session | null) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return prisma.track.findMany({
//     include: {
//       _count: {
//         select: {
//           trackChallenges: true,
//         },
//       },
//       enrolledUsers: {
//         where: {
//           id: session?.user.id ?? '',
//         },
//       },
//     },
//     where: {
//       visible: true,
//     },
//   });
// }
