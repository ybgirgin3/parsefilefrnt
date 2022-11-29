import React from 'react';

function NavBar() {
  return (
    <div className='h-100'>
      <div className='"w-screen w-20 p-3 text-white bg-gradient-to-tr from-red-900 via-red-500 to-yellow-500 shadow fixed'>
        BETA
      </div>
      <div class="absolute inset-y-0 right-0 w-30 z-index: 9999">
        <a href="https://github.com/you"><img decoding="async" loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
      </div>
    </div>
  );
}

export default NavBar;
