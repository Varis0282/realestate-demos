import { Building2, Home, Landmark, Trees, Dumbbell, Baby, Zap, Route, Droplets, KeyRound, ShieldCheck, Clock, IndianRupee, HardHat, FileCheck, Ruler, MapPin, BadgeCheck, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Building2, Home, Landmark, Trees, Dumbbell, Baby, Zap, Route, Droplets, KeyRound, ShieldCheck, Clock, IndianRupee, HardHat, FileCheck, Ruler, MapPin, BadgeCheck };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Building2;
  return <C className={className} />;
}
