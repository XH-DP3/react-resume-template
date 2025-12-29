import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="mb-3 text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, description } = skill;

  return (
    <div className="flex flex-col gap-1">
      {/* name row */}
      <div className="flex items-center gap-3">
        {/* accent bar */}
        <span className="h-[2px] w-2 rounded bg-orange-400 shrink-0" />

        <span className="text-sm font-medium text-neutral-800">
          {name}
        </span>
      </div>

      {/* description */}
      {description && (
        <span className="ml-5 text-sm text-neutral-500">
          {description}
        </span>
      )}
    </div>
  );
});



Skill.displayName = 'Skill';
