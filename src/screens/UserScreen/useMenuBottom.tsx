import { useTranslation } from 'react-i18next';
import { RootTabScreenProps } from '../../../types';
import { logOut } from '../../db/API/auth';

const useMenuBottom = ({ navigation }: RootTabScreenProps<'User'>) => {
  const { t } = useTranslation();

  const opernModal = (action: string) => {
    navigation.navigate('Modal', {
      screen: 'Modal',
      params: {
        type: 'user',
        action,
      },
    });
  };

  const handleLogout = async () => {
    const result = await logOut();
    if (result === 'success') navigation.navigate('Home');
  };

  const actions = [
    {
      icon: { name: 'add', color: '#fff' },
      name: t('actionsBottomMenu.addWord'),
      onClick: () => {
        opernModal('addWord');
      },
    },
    {
      icon: { name: 'list', color: '#fff' },
      name: t('actionsBottomMenu.wordsList'),
      onClick: () => opernModal('list'),
    },
    {
      icon: { name: 'settings', color: '#fff' },
      name: t('actionsBottomMenu.preferences'),
      onClick: () => opernModal('preferences'),
    },
    {
      icon: { name: 'logout', color: '#fff' },
      name: t('actionsBottomMenu.logout'),
      onClick: () => handleLogout(),
    },
  ];

  return {
    actions,
  };
};

export default useMenuBottom;
