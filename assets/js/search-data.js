// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This is my curriculum vitae (CV) page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-multi-modal-speech-emotion-recognition-improving-accuracy-through-fusion-of-vggish-and-bert-features-with-multi-head-attention",
          title: 'Multi-modal Speech Emotion Recognition: Improving Accuracy through Fusion of VGGish and BERT Features...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-️-️-️-03-papers-were-accepted-at-the-14th-international-conference-on-ict-convergence-jeju-korea-oct-11-13-2023",
          title: '🗞️🗞️🗞️ 03 papers were accepted at The 14th International Conference on ICT Convergence,...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-awarded-valedictorian-of-information-technology-at-fpt-university-graduation-ceremony",
          title: 'Awarded valedictorian of information technology at FPT University Graduation Ceremony',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2023_11_12/";
            },},{id: "news-️-️-02-papers-were-accepted-at-the-2024-9th-international-conference-on-intelligent-information-technology-iciit-2024",
          title: '🗞️🗞️ 02 papers were accepted at The 2024 9th International Conference on Intelligent...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2023_11_20/";
            },},{id: "news-️-01-paper-was-accepted-at-the-38th-international-conference-on-information-networking-icoin-2024",
          title: '🗞️ 01 paper was accepted at The 38th International Conference on Information Networking...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2023_12_23/";
            },},{id: "news-️-01-paper-was-accepted-at-the-eai-iniscom-2024-10th-eai-international-conference-on-industrial-networks-and-intelligent-systems",
          title: '🗞️ 01 paper was accepted at The EAI INISCOM 2024 - 10th EAI...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2023_12_29/";
            },},{id: "news-️-️-️-️-04-papers-were-accepted-at-the-15th-international-conference-on-ict-convergence-jeju-korea-oct-16-18-2024",
          title: '🗞️🗞️🗞️🗞️ 04 papers were accepted at The 15th International Conference on ICT Convergence,...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2024_08_19/";
            },},{id: "news-️-01-paper-was-accepted-by-the-expert-systems-with-applications-journal-q1",
          title: '🗞️ 01 paper was accepted by the Expert Systems With Applications Journal (Q1)....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2024_09_23/";
            },},{id: "news-️-paper-quot-memocmt-multimodal-emotion-recognition-using-cross-modal-transformer-based-feature-fusion-quot-was-accepted-by-the-scientific-reports",
          title: '🗞️ Paper &amp;quot;MemoCMT Multimodal Emotion Recognition Using Cross-Modal Transformer-Based Feature Fusion&amp;quot; was accepted...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2025_02_04/";
            },},{id: "news-️-paper-quot-memocmt-multimodal-emotion-recognition-using-cross-modal-transformer-based-feature-fusion-quot-was-accepted-by-the-scientific-reports",
          title: '🗞️ Paper &amp;quot;MemoCMT Multimodal Emotion Recognition Using Cross-Modal Transformer-Based Feature Fusion&amp;quot; was accepted...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2025_10_13/";
            },},{id: "news-️-paper-quot-deepseek-inspired-exploration-of-rl-based-llms-and-synergy-with-wireless-networks-a-survey-quot-was-published-by-the-acm-computing-surveys",
          title: '🗞️ Paper &amp;quot;DeepSeek-Inspired Exploration of RL-Based LLMs and Synergy with Wireless Networks A...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2025_11_14%20/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/840177865592537128", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%70%6E%61%6D%30%39%30%31@%6B%68%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/tpnam0901", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tpnam0901", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/tpnam0901", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/113059181781987/", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/tpnam0901", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/tpnnam", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tpnam0901", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-6551-9106", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Phuong-Nam-Tran/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NKbwDD8AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57185035100", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Phuong-Nam-Tran/2280926816", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/tpnam0901", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
