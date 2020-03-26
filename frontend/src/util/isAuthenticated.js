export default function isAuthenticated() {
  if (localStorage.getItem('@BeTheHero/id')) {
    return true;
  }

  return false;
}
