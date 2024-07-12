import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesRedirectComponent } from './products/services-redirect/services-redirect.component'
import { FireSuppressionSystemComponent } from './products/fire-suppression-system/fire-suppression-system.component'
import { FireSprinklerSystemComponent } from './products/fire-sprinkler-system/fire-sprinkler-system.component'
import { FireHydrantSystemComponent } from './products/fire-hydrant-system/fire-hydrant-system.component'
import { FireDetectionSystemComponent } from './products/fire-detection-system/fire-detection-system.component'
import { FireAuditComponent } from './products/fire-audit/fire-audit.component'
import { FireExtinguisherRefillingComponent } from './products/fire-extinguisher-refilling/fire-extinguisher-refilling.component'
import { HydraulicPressureTestingComponent } from './products/hydraulic-pressure-testing/hydraulic-pressure-testing.component'
import { LicensingComponent } from './products/licensing/licensing.component'
import { RepairComponent } from './products/repair/repair.component'
import { TrainingComponent } from './products/training/training.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FireSuppressionSystemComponent, ServicesRedirectComponent, FireSprinklerSystemComponent, FireHydrantSystemComponent, FireDetectionSystemComponent, FireAuditComponent, FireExtinguisherRefillingComponent, HydraulicPressureTestingComponent, LicensingComponent, RepairComponent, TrainingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NFPA-INDIA-PVT-LTD';
}
