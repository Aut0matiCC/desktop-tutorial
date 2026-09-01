import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/content';
export default function HighwayDPR() {
  return <ServiceDetailTemplate service={SERVICES.find(s => s.id === 'highway-dpr')} />;
}
