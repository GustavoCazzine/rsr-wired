import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  searchUserByName,
  getUserProfile,
  getUserBadges,
  getUserFriends,
  getUserRooms,
  HabboApiError,
} from '../api/habboApi';
import { SearchBar } from '../components/player/SearchBar';
import { PlayerHeader } from '../components/player/PlayerHeader';
import { BadgesGrid } from '../components/player/BadgesGrid';
import { GroupsGrid } from '../components/player/GroupsGrid';
import { RoomsGrid } from '../components/player/RoomsGrid';
import { FriendsGrid } from '../components/player/FriendsGrid';
import { Loader } from '../components/common/Loader';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { EmptyState } from '../components/common/EmptyState';

export function PlayerSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialNick = searchParams.get('nick') ?? '';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [player, setPlayer] = useState(null);
  const [groups, setGroups] = useState([]);
  const [badges, setBadges] = useState([]);
  const [friends, setFriends] = useState([]);
  const [rooms, setRooms] = useState([]);

  const runSearch = useCallback(async (nick) => {
    setLoading(true);
    setError(null);
    setPlayer(null);
    setGroups([]);
    setBadges([]);
    setFriends([]);
    setRooms([]);

    try {
      const basicUser = await searchUserByName(nick);
      setPlayer(basicUser);

      if (basicUser.profileVisible) {
        const [profileResult, badgesResult, friendsResult, roomsResult] = await Promise.allSettled([
          getUserProfile(basicUser.uniqueId),
          getUserBadges(basicUser.uniqueId),
          getUserFriends(basicUser.uniqueId),
          getUserRooms(basicUser.uniqueId),
        ]);

        if (profileResult.status === 'fulfilled') setGroups(profileResult.value.groups ?? []);
        if (badgesResult.status === 'fulfilled') setBadges(badgesResult.value ?? []);
        if (friendsResult.status === 'fulfilled') setFriends(friendsResult.value ?? []);
        if (roomsResult.status === 'fulfilled') setRooms(roomsResult.value ?? []);
      }
    } catch (err) {
      setError(err instanceof HabboApiError && err.notFound ? 'notfound' : 'network');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialNick) {
      runSearch(initialNick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch(nick) {
    setSearchParams({ nick });
    runSearch(nick);
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Buscar Jogador</span>
          <h1>Consulte um perfil do Habbo</h1>
          <p>Digite o nick exato de um jogador do Habbo BR para ver avatar, emblemas, grupos, quartos e amigos.</p>
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} initialValue={initialNick} />

        {loading && <Loader label="Buscando jogador..." />}

        {!loading && error === 'notfound' && (
          <EmptyState
            icon="🙈"
            title="Jogador não encontrado"
            message="Confira se o nick foi digitado corretamente — a busca precisa do nick exato."
          />
        )}

        {!loading && error === 'network' && (
          <ErrorMessage
            title="Erro ao buscar"
            message="Não foi possível falar com a API do Habbo agora. Tente novamente em instantes."
          />
        )}

        {!loading && !error && !player && <EmptyState icon="🔍" title="Pesquise um nick para começar" />}

        {!loading && player && (
          <>
            <PlayerHeader player={player} />

            {player.profileVisible && (
              <>
                <section className="player-section">
                  <h3>Emblemas</h3>
                  <BadgesGrid badges={badges} />
                </section>

                <section className="player-section">
                  <h3>Grupos</h3>
                  <GroupsGrid groups={groups} />
                </section>

                <section className="player-section">
                  <h3>Quartos</h3>
                  <RoomsGrid rooms={rooms} />
                </section>

                <section className="player-section">
                  <h3>Amigos</h3>
                  <FriendsGrid friends={friends} />
                </section>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
