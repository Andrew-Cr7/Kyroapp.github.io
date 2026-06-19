import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LondonGymDayPasses from "./pages/LondonGymDayPasses";
import ForGyms from "./pages/ForGyms";
import {
  CanTouristsUseGymsInLondon,
  GymDayPassesUk,
  HowToFindAGymWhileTravelling,
} from "./pages/SeoContentPages";
import {
  AirportLayoverGymAccess,
  BusinessTravelGymAccess,
  FitnessWhileTravellingGuide,
  GymAccessForDigitalNomads,
  VisitorGymAccess,
} from "./pages/SeoBatchPages";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            <Route
              path="/london-gym-day-passes"
              element={<LondonGymDayPasses />}
            />
            <Route path="/gym-day-passes-uk" element={<GymDayPassesUk />} />
            <Route
              path="/how-to-find-a-gym-while-travelling"
              element={<HowToFindAGymWhileTravelling />}
            />
            <Route
              path="/can-tourists-use-gyms-in-london"
              element={<CanTouristsUseGymsInLondon />}
            />
            <Route
              path="/fitness-while-travelling-guide"
              element={<FitnessWhileTravellingGuide />}
            />
            <Route
              path="/gym-access-for-digital-nomads"
              element={<GymAccessForDigitalNomads />}
            />
            <Route
              path="/business-travel-gym-access"
              element={<BusinessTravelGymAccess />}
            />
            <Route path="/visitor-gym-access" element={<VisitorGymAccess />} />
            <Route
              path="/airport-layover-gym-access"
              element={<AirportLayoverGymAccess />}
            />

            <Route path="/for-gyms" element={<ForGyms />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
