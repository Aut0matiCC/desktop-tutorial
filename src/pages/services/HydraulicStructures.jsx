import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/content';
export default function HydraulicStructures() {
  return <ServiceDetailTemplate service={SERVICES.find(s => s.id === 'hydraulic-structures')} />;
}
