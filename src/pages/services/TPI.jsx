import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/content';
export default function TPI() {
  return <ServiceDetailTemplate service={SERVICES.find(s => s.id === 'tpi')} />;
}
