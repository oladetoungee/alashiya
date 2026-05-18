import { TEAM_MEMBERS } from "@/lib/team";
import { Reveal } from "../reveal";
import { TeamCard } from "./team-card";

export function TeamGrid() {
  return (
    <section className="bg-surface px-6 pb-24 lg:px-20 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-12">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delay={(index % 5) * 90}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
