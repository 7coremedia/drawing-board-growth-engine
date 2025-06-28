import { AlertTriangle, TrendingDown, Users, MessageSquare, Eye, Zap } from 'lucide-react';
const PainPointsSection = () => {
  const painPoints = [{
    icon: MessageSquare,
    text: "You post consistently but hear crickets",
    color: "text-red-500"
  }, {
    icon: TrendingDown,
    text: "You tried boosting your post — nothing happened",
    color: "text-orange-500"
  }, {
    icon: Users,
    text: "You've had some customers but no one sticks",
    color: "text-yellow-500"
  }, {
    icon: AlertTriangle,
    text: "Referrals are inconsistent",
    color: "text-purple-500"
  }, {
    icon: Eye,
    text: "Your business is invisible online",
    color: "text-blue-500"
  }, {
    icon: Zap,
    text: "You feel stuck",
    color: "text-gray-500"
  }];
  return;
};
export default PainPointsSection;