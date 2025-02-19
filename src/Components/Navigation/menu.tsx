const icons = {
  tokens: (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 6.8598C7 6.30752 7.44772 5.8598 8 5.8598H21C21.5523 5.8598 22 6.30752 22 6.8598C22 7.41209 21.5523 7.8598 21 7.8598H8C7.44772 7.8598 7 7.41209 7 6.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 12.8598C7 12.3075 7.44772 11.8598 8 11.8598H21C21.5523 11.8598 22 12.3075 22 12.8598C22 13.4121 21.5523 13.8598 21 13.8598H8C7.44772 13.8598 7 13.4121 7 12.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 18.8598C7 18.3075 7.44772 17.8598 8 17.8598H21C21.5523 17.8598 22 18.3075 22 18.8598C22 19.4121 21.5523 19.8598 21 19.8598H8C7.44772 19.8598 7 19.4121 7 18.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 6.8598C5 6.30752 4.55228 5.8598 4 5.8598H3C2.44772 5.8598 2 6.30752 2 6.8598C2 7.41209 2.44772 7.8598 3 7.8598H4C4.55228 7.8598 5 7.41209 5 6.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12.8598C5 12.3075 4.55228 11.8598 4 11.8598H3C2.44772 11.8598 2 12.3075 2 12.8598C2 13.4121 2.44772 13.8598 3 13.8598H4C4.55228 13.8598 5 13.4121 5 12.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 18.8598C5 18.3075 4.55228 17.8598 4 17.8598H3C2.44772 17.8598 2 18.3075 2 18.8598C2 19.4121 2.44772 19.8598 3 19.8598H4C4.55228 19.8598 5 19.4121 5 18.8598Z"
      />
    </svg>
  ),
  search: (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 11.3598C2 6.66538 5.80558 2.8598 10.5 2.8598C15.1944 2.8598 19 6.66538 19 11.3598C19 16.0542 15.1944 19.8598 10.5 19.8598C5.80558 19.8598 2 16.0542 2 11.3598ZM10.5 4.8598C6.91015 4.8598 4 7.76995 4 11.3598C4 14.9497 6.91015 17.8598 10.5 17.8598C14.0899 17.8598 17 14.9497 17 11.3598C17 7.76995 14.0899 4.8598 10.5 4.8598Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0929 15.9527C15.4834 15.5622 16.1166 15.5622 16.5071 15.9527L21.7071 21.1527C22.0976 21.5432 22.0976 22.1764 21.7071 22.5669C21.3166 22.9574 20.6834 22.9574 20.2929 22.5669L15.0929 17.3669C14.7024 16.9764 14.7024 16.3432 15.0929 15.9527Z"
      />
    </svg>
  ),
} as const

type Keys = keyof typeof icons
type Icons = typeof icons[Keys]

export interface MenuItem {
  id: string
  title: string
  icon: Icons
  href: string
}

export const menu: MenuItem[] = [
  {
    id: 'tokens',
    title: 'Токены',
    icon: icons.tokens,
    href: '/tokens',
  },
  {
    id: 'search',
    title: 'Поиск',
    icon: icons.search,
    href: '/search',
  },
]
