// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: 'ja',
  autoclear_cookies: true,                   // default: false
  page_scripts: true,                        // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: true,                   // default: true
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  gui_options: {
    consent_modal: {
      layout: 'cloud',               // box/cloud/bar
      position: 'bottom center',     // bottom/middle/top + left/right/center
      transition: 'slide',           // zoom/slide
      swap_buttons: false            // enable to invert buttons
    },
    settings_modal: {
      layout: 'bar',                 // box/bar
      position: 'left',           // left/right
      transition: 'zoom'            // zoom/slide
    }
  },

  languages: {
    'ja': {
      consent_modal: {
        title: '当サイトはクッキー（Cookie）を使用しています。',
        description: '利便性向上や利用状況の分析、広告配信等のためにパーソナルデータを利用しています。利用目的や送信先などの詳細を以下のカテゴリ毎にご確認いただけます。「必須」以外について、選択を外すことで、情報の送信を停止することができます。<button type="button" data-cc="c-settings" class="cc-link">設定する</button>',
        primary_btn: {
          text: 'すべて許可',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'すべて拒否',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'クッキー設定',
        save_settings_btn: '保存',
        accept_all_btn: 'すべて許可',
        reject_all_btn: 'すべて拒否',
        close_btn_label: 'Close',
        cookie_table_headers: [
          { col1: 'クッキー名' },
          { col2: 'サービス' },
          { col3: '満了' },
          { col4: '説明' }
        ],
        blocks: [
          {
            title: '使用クッキー 📢',
            description: '利便性向上や利用状況の分析、広告配信等のためにパーソナルデータを利用しています。利用目的や送信先などの詳細を以下のカテゴリ毎にご確認いただけます。「必須」以外について、選択を外すことで、情報の送信を停止することができます。'
          }, {
            title: '必須',
            description: '本ウェブサイトをご利用いただく上で必要となる機能、ウェブサイトの運営に必要な外部サービスです。',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'アクセス解析',
            description: '本サイトやアプリご利用者のアクセスを解析し、画面毎のアクセス回数や滞在時間、利用環境や地域毎の利用者数、流入経路や検索語句等を分析し、利便性の向上やコンテンツの最適化、広告の効果測定などを行うために以下のサービスにパーソナルデータを送信しています。これらのサービスの詳細については、以下よりご確認ください。',
            toggle: {
              value: 'analytics',     // your cookie category
              enabled: false,
              readonly: false
            },
            cookie_table: [             // list of all expected cookies
              {
                col1: '^_ga',       // match all cookies starting with "_ga"
                col2: 'Google LLC',
                col3: '2年',
                col4: 'Google Analytics は、閲覧ページ毎のアクセス回数や滞在時間、利用環境や地域毎の利用者数、流入経路や検索語句等を分析する機能を提供しています。Google Analyticsが使用する主なCookieである\'_ga\'は、ある訪問者を別の訪問者と区別する識別子として機能し、2年間存続します。この識別子は無関係のウェブサイト間で特定のユーザーやブラウザを追跡するために使用することはできません。',
                is_regex: true
              },
              {
                col1: '_gid',
                col2: 'Google LLC',
                col3: '1日',
                col4: 'Google Analytics は、ユーザーにIDを割り当て、ウェブトラッカーがこのIDでユーザーの行動を記録できるようにし、24時間存続します。',
              }
            ]
          },
          // {
          //   title: 'Advertisement and Targeting cookies',
          //   description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
          //   toggle: {
          //     value: 'targeting',
          //     enabled: false,
          //     readonly: false
          //   }
          // }, {
          //   title: 'More information',
          //   description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          // }
        ]
      }
    }
  }
});