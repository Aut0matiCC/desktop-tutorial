import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/content';
export default function TrafficPavement() {
  return <ServiceDetailTemplate service={SERVICES.find(s => s.id === 'traffic-pavement-structural')} />;
}
