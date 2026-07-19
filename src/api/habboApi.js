const API_BASE = 'https://www.habbo.com.br/api/public';
const IMAGING_BASE = 'https://www.habbo.com.br/habbo-imaging';
const BADGE_CDN = 'https://images.habbo.com/c_images/album1584';

class HabboApiError extends Error {
  constructor(message, { notFound = false } = {}) {
    super(message);
    this.name = 'HabboApiError';
    this.notFound = notFound;
  }
}

async function request(path) {
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`);
  } catch {
    throw new HabboApiError('Não foi possível conectar à API do Habbo. Verifique sua conexão.');
  }

  if (response.status === 404) {
    throw new HabboApiError('Não encontrado.', { notFound: true });
  }

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.error) {
    throw new HabboApiError('Não encontrado.', { notFound: true });
  }

  return data;
}

export function searchUserByName(name) {
  return request(`/users?name=${encodeURIComponent(name)}`);
}

export function getUserProfile(uniqueId) {
  return request(`/users/${encodeURIComponent(uniqueId)}/profile`);
}

export function getUserBadges(uniqueId) {
  return request(`/users/${encodeURIComponent(uniqueId)}/badges`);
}

export function getUserFriends(uniqueId) {
  return request(`/users/${encodeURIComponent(uniqueId)}/friends`);
}

export function getUserRooms(uniqueId) {
  return request(`/users/${encodeURIComponent(uniqueId)}/rooms`);
}

export function getAvatarImageUrl(
  figureString,
  { size = 'l', direction = 2, headDirection = 3, headOnly = false } = {}
) {
  const params = new URLSearchParams({
    figure: figureString,
    size,
    direction: String(direction),
    head_direction: String(headDirection),
    action: 'std',
    gesture: 'std',
  });
  if (headOnly) params.set('headonly', '1');
  return `${IMAGING_BASE}/avatarimage?${params.toString()}`;
}

export function getBadgeImageUrl(code) {
  return `${BADGE_CDN}/${encodeURIComponent(code)}.gif`;
}

export function getGroupBadgeImageUrl(badgeCode) {
  return `${IMAGING_BASE}/badge/${encodeURIComponent(badgeCode)}.gif`;
}

export { HabboApiError };
