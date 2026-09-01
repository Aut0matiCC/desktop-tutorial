import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/content';
export default function SurveyGeomatics() {
  return <ServiceDetailTemplate service={SERVICES.find(s => s.id === 'survey-geomatics')} />;
}
