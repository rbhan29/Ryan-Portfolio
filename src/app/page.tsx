import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import AvatarChat from "./components/AvatarChat";

export default function Page() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <AvatarChat />
    </>
  );
}