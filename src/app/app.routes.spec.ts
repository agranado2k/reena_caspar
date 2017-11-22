import { routes } from './app.routes';
import { PatientComponent } from './patient/patient.component';

describe('routes', () => {
  it('should has the / route', () => {
    expect(routes).toContain({path: '', component: PatientComponent});
  });
});
