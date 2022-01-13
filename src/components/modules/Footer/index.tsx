import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className={`footer`}>
      <div className={`footer_copyright_content`}>
        Pietro Bondioli Copyright (c) 2021 MIT
      </div>
      <div className={`footer_social_media`}>
        <div className={`icon flex_center`}>github</div>
        <div className={`icon flex_center`}>linkedin</div>
      </div>
    </footer>
  );
};

export default Footer;
