import { Landmark, Waves, Building2, MapPin, ShieldCheck } from 'lucide-react';

/**
 * DepartmentTicker - Clean, elevated department trust strip
 * floating over the bottom edge of the hero highway image.
 */
export default function DepartmentTicker() {
  const departments = [
    { name: 'Roads & Buildings Dept', code: 'Gujarat R&B', icon: Landmark },
    { name: 'Irrigation Department', code: 'Hydraulic & Canals', icon: Waves },
    { name: 'Urban Municipalities', code: 'Municipal Bodies', icon: Building2 },
    { name: 'Panchayat Department', code: 'Rural Roads', icon: MapPin },
    { name: 'MoRTH & IRC Standards', code: 'Central Compliance', icon: ShieldCheck },
  ];

  return (
    <div className="-mt-12 xs:-mt-16 sm:-mt-28 md:-mt-40 lg:-mt-52 w-[90%] mx-auto relative z-20 pb-8 sm:pb-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-5 items-stretch justify-center">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          const isLast = idx === 4;
          return (
            <div
              key={dept.name}
              className={`flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-sky-950/5 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-950/10 transition-all group text-center ${isLast ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                }`}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-50 text-sky-700 group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center mb-2.5 sm:mb-3.5 transition-colors shadow-xs">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-[15px] xl:text-base font-heading font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                {dept.name}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-500 mt-1">
                {dept.code}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
