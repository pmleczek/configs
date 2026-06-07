interface HeaderProps {
  title: string;
  onMenuToggle: () => void;
}

export const Header = ({ title, onMenuToggle }: HeaderProps) => (
  <header>
    <h1>{title}</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
    </nav>
    <div onClick={() => onMenuToggle()}>Menu</div>
  </header>
);
