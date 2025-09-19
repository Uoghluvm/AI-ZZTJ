import type { VolumeGroup } from './types';

export const ZIZHI_TONGJIAN_VOLUMES: VolumeGroup[] = [
  {
    dynasty: '周纪 (1-5卷)',
    chapters: [
      {
        id: 1,
        title: '第一卷 周纪一',
        summary: '公元前403年，三家分晋，战国时代开始。',
        characters: [
          {
            name: '魏文侯',
            description: '魏国第一位君主，礼贤下士，任用李悝变法，使魏国成为战国初期最强盛的国家。',
            systemInstruction: '你现在是魏国的开国君主魏文侯。你雄才大略，知人善任，并且非常重视人才。你的语气应该沉稳、自信且具有远见。与用户对话时，多从治国、用人的角度出发，可以引用你和大臣们的故事，例如西门豹治邺、乐羊伐中山等。',
          },
          {
            name: '赵烈侯',
            description: '赵国开国君主，任用公仲连进行改革，但赵国在三家中相对较弱。',
            systemInstruction: '你现在是赵国的开国君主赵烈侯。你是一位有志向但处境较为艰难的君主。你的语气可以带有一定的忧虑，但同时也要展现出改革图强的决心。可以和用户探讨如何在强敌环伺的环境中求生存、求发展。',
          },
          {
            name: '韩景侯',
            description: '韩国开国君主，韩国国小地狭，处在强国之间，生存环境恶劣。',
            systemInstruction: '你现在是韩国的开国君主韩景侯。你非常谨慎务实，深知小国生存的不易。你的语气应该谦虚、谨慎，但又不失君主的尊严。对话时可以强调法治和权谋的重要性，这正是韩国后来申不害变法思想的源头。',
          },
        ],
        comicPrompt: '公元前403年，宏伟的东周王朝宫殿内，周威烈王坐在庄严的宝座上，三位使者（韩、赵、魏）在他面前恭敬地跪拜接受册封。宫殿的梁柱雕刻着龙凤，气氛严肃而重大。风格：中国古代工笔画，色彩厚重。',
      },
      {
        id: 2,
        title: '第二卷 周纪二',
        summary: '吴起在魏、楚变法改革，三晋与齐、楚等国战争。',
        characters: [
          {
            name: '吴起',
            description: '战国初期著名的军事家、政治家、改革家，先后在鲁、魏、楚三国出仕。',
            systemInstruction: '你现在是吴起。你是一个对自己和他人要求都极为严格的法家人物，同时也是一位百战百胜的将军。你的语气必须果断、严厉，不带感情。对话时，要强调纪律、法治和效率，对任何形式的贵族特权和腐败都表现出极度的不屑。',
          },
          {
            name: '楚悼王',
            description: '楚国国君，任用吴起进行变法，希望重振楚国。',
            systemInstruction: '你现在是楚悼王。你是一位渴望国家强大的君主，因此你力排众议，坚决支持吴起变法。你的语气充满希望，但又夹杂着对国内强大守旧势力的担忧。你可以和用户讨论改革的艰难以及你对楚国未来的期望。',
          },
        ],
        comicPrompt: '楚国朝堂之上，改革家吴起正面对着一群愤怒的楚国老贵族。吴起表情坚毅，手持法令竹简，而贵族们则手指着他，神情激动。背景是楚国特色的华丽宫殿。风格：具有强烈戏剧张力的中国连环画风格。',
      },
      { id: 3, title: '第三卷 周纪三', summary: '内容待补充...', characters: [], comicPrompt: '' },
      { id: 4, title: '第四卷 周纪四', summary: '内容待补充...', characters: [], comicPrompt: '' },
      { id: 5, title: '第五卷 周纪五', summary: '内容待补充...', characters: [], comicPrompt: '' },
    ],
  },
  {
    dynasty: '秦纪 (6-10卷)',
    chapters: [
      { id: 6, title: '第六卷 秦纪一', summary: '商鞅变法，秦国崛起。', characters: [], comicPrompt: '' },
      { id: 7, title: '第七卷 秦纪二', summary: '内容待补充...', characters: [], comicPrompt: '' },
      { id: 8, title: '第八卷 秦纪三', summary: '内容待补充...', characters: [], comicPrompt: '' },
    ],
  },
  {
    dynasty: '汉纪 (11-70卷)',
    chapters: [
      { id: 9, title: '第九卷 汉纪一', summary: '楚汉相争，刘邦建汉。', characters: [], comicPrompt: '' },
      { id: 10, title: '第十卷 汉纪二', summary: '内容待补充...', characters: [], comicPrompt: '' },
      ...Array.from({ length: 60 }, (_, i) => ({
        id: 11 + i,
        title: `第${11 + i}卷 汉纪${3 + i}`,
        summary: '内容待补充...',
        characters: [],
        comicPrompt: '',
      })),
    ],
  },
  {
    dynasty: '魏纪 (71-80卷)',
    chapters: Array.from({ length: 10 }, (_, i) => ({
      id: 71 + i,
      title: `第${71 + i}卷 魏纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '晋纪 (81-120卷)',
    chapters: Array.from({ length: 40 }, (_, i) => ({
      id: 81 + i,
      title: `第${81 + i}卷 晋纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '宋纪 (121-136卷)',
    chapters: Array.from({ length: 16 }, (_, i) => ({
      id: 121 + i,
      title: `第${121 + i}卷 宋纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '齐纪 (137-146卷)',
    chapters: Array.from({ length: 10 }, (_, i) => ({
      id: 137 + i,
      title: `第${137 + i}卷 齐纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '梁纪 (147-166卷)',
    chapters: Array.from({ length: 20 }, (_, i) => ({
      id: 147 + i,
      title: `第${147 + i}卷 梁纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '陈纪 (167-176卷)',
    chapters: Array.from({ length: 10 }, (_, i) => ({
      id: 167 + i,
      title: `第${167 + i}卷 陈纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '隋纪 (177-184卷)',
    chapters: Array.from({ length: 8 }, (_, i) => ({
      id: 177 + i,
      title: `第${177 + i}卷 隋纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '唐纪 (185-265卷)',
    chapters: Array.from({ length: 81 }, (_, i) => ({
      id: 185 + i,
      title: `第${185 + i}卷 唐纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '后梁纪 (266-271卷)',
    chapters: Array.from({ length: 6 }, (_, i) => ({
      id: 266 + i,
      title: `第${266 + i}卷 后梁纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '后唐纪 (272-279卷)',
    chapters: Array.from({ length: 8 }, (_, i) => ({
      id: 272 + i,
      title: `第${272 + i}卷 后唐纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '后晋纪 (280-285卷)',
    chapters: Array.from({ length: 6 }, (_, i) => ({
      id: 280 + i,
      title: `第${280 + i}卷 后晋纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '后汉纪 (286-289卷)',
    chapters: Array.from({ length: 4 }, (_, i) => ({
      id: 286 + i,
      title: `第${286 + i}卷 后汉纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
  {
    dynasty: '后周纪 (290-294卷)',
    chapters: Array.from({ length: 5 }, (_, i) => ({
      id: 290 + i,
      title: `第${290 + i}卷 后周纪${1 + i}`,
      summary: '内容待补充...',
      characters: [],
      comicPrompt: '',
    })),
  },
];
