import { loadProfileCard } from "../components/profile-card/profile-card";

await loadProfileCard(".profile-header").then(async () => {
  console.log('Profile card loaded successfully');
}).catch(error => {
  console.error('Error loading profile card:', error);
});
