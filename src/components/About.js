import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Link">
      <Link className="Link" to="/">
        <p>Home</p>
      </Link>
      <h1>About</h1>
      <p>
        This website was designed for rating the Batman the Animated Series
        Episodes. The Series ran from 1992 to 1995 on Fox consisting of 85
        episodes. Seasson One consisted of 65 episodes under the name Batman:
        the Animated Series. Season Two contained 20 more episodes under the
        name The Adventures of Batman & Robin. The New Batman Adventures was a
        continuation of the series that aired on The WB network from 1997 to
        1999 with 24 Episodes.
      </p>
      <h1>Rating Process</h1>
      <p>
        The rating process will treat the Batman: the Animated Series as Season
        1, The Adventures of Batman and Robin as season 2, and the New Batman
        Adventures as season 3. The rating process will be letter based (A-F)
      </p>
      <p>
        {' '}
        Note: The TVShow Episodes page is utilizing the TV Maze API. The Search
        functionality is available for searching all the three seasons.
      </p>
    </div>
  );
};
