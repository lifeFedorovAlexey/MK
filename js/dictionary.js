const PLAYERS_SPRITES = [
    {
      key: 'sonya',
      player: 'SONYA',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/sonya-slipping.gif'
      }
    },
    {
      key: 'shangtsung',
      player: 'SHANG-TSUNG',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-slipping.gif'
      }
    },
    {
      key: 'sindel',
      player: 'SINDEL',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/sindel-slipping.gif'
      }
    },
    {
      key: 'jax',
      player: 'JAX',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/jax-slipping.gif'
      }
    },
    {
      key: 'kano',
      player: 'KANO',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/kano-slipping.gif'
      }
    },
    {
      key: 'liukang',
      player: 'LIU-KANG',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/liukang-slipping.gif'
      }
    },
    {
      key: 'subzero',
      player: 'SUB-ZERO',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/subzero-slipping.gif'
      }
    },
    {
      key: 'stryker',
      player: 'STRYKER',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/stryker-slipping.gif'
      }
    },
    {
      key: 'smoke',
      player: 'SMOKE',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/smoke-slipping.gif'
      }
    },
    {
      key: 'cyrax',
      player: 'CYRAX',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/cyrax-slipping.gif'
      }
    },
    {
      key: 'sektor',
      player: 'SEKTOR',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/sektor-slipping.gif'
      }
    },
    {
      key: 'nightwolf',
      player: 'NIGHT-WOLF',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/nightwolf-slipping.gif'
      }
    },
    {
      key: 'shangtsung',
      player: 'SHANGT-SUNG',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/shangtsung-slipping.gif'
      }
    },
    {
      key: 'sheeva',
      player: 'SHEEVA',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/sheeva-slipping.gif'
      }
    },
    {
      key: 'kunglao',
      player: 'KUNG-LAO',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/kunglao-slipping.gif'
      }
    },
    {
      key: 'kabal',
      player: 'KABAL',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/kabal-slipping.gif'
      }
    },
    {
      key: 'noobsaibot',
      player: 'NOOB-SAIBOT',
      states: {
        stance: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot.gif',
        forward: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-walking-f.gif',
        backward: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-walking-b.gif',
        running: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-running.gif',
        dizzy: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-dizzy.gif',
        falling: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-falling.gif',
        slipping: 'https://www.mortalkombatwarehouse.com/mk3/animations/noobsaibot-slipping.gif'
      }
    }
  ];

  const LOGS = {
    start: ['Часы показывали [time], когда [first] и [second] бросили вызов друг другу.'],
    end: [
        'Результат удара [first]: [second] - труп',
        '[second] погиб от удара бойца [first]',
        'Результат боя: [second] - жертва, [first] - убийца',
    ],
    hit: [
        '[first] пытался сконцентрироваться, но [second] разбежавшись раздробил копчиком левое ухо врага.',
        '[first] расстроился, как вдруг, неожиданно [second] случайно раздробил грудью грудину противника.',
        '[first] зажмурился, а в это время [second], прослезившись, раздробил кулаком пах оппонента.',
        '[first] чесал <вырезано цензурой>, и внезапно неустрашимый [second] отчаянно размозжил грудью левый бицепс оппонента.',
        '[first] задумался, но внезапно [second] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[first] ковырялся в зубах, но [second] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[first] вспомнил что-то важное, но внезапно [second] зевнув, размозжил открытой ладонью челюсть противника.',
        '[first] осмотрелся, и в это время [second] мимоходом раздробил стопой аппендикс соперника.',
        '[first] кашлянул, но внезапно [second] показав палец, размозжил пальцем грудь соперника.',
        '[first] пытался что-то сказать, а жестокий [second] проснувшись размозжил копчиком левую ногу противника.',
        '[first] забылся, как внезапно безумный [second] со скуки, влепил удар коленом в левый бок соперника.',
        '[first] поперхнулся, а за это [second] мимоходом раздробил коленом висок врага.',
        '[first] расстроился, а в это время наглый [second] пошатнувшись размозжил копчиком губы оппонента.',
        '[first] осмотрелся, но внезапно [second] робко размозжил коленом левый глаз противника.',
        '[first] осмотрелся, а [second] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[first] ковырялся в зубах, как вдруг, неожиданно [second] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[first] пришел в себя, и в это время [second] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[first] пошатнулся, а в это время [second] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[first] потерял момент и храбрый [second] отпрыгнул от удара открытой ладонью в ключицу.',
        '[first] не контролировал ситуацию, и потому [second] поставил блок на удар пяткой в правую грудь.',
        '[first] потерял момент и [second] поставил блок на удар коленом по селезенке.',
        '[first] поскользнулся и задумчивый [second] поставил блок на тычок головой в бровь.',
        '[first] старался провести удар, но непобедимый [second] ушел в сторону от удара копчиком прямо в пятку.',
        '[first] обманулся и жестокий [second] блокировал удар стопой в солнечное сплетение.',
        '[first] не думал о бое, потому расстроенный [second] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[first] обманулся и жестокий [second] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: ['Ничья - это тоже победа!']
};

