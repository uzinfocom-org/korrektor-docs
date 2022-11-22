import { Draw } from "./drawer";

const LOAD_MORE = {
  "en-US":
    "M354.49 309H359.761V307.866H355.807V300.273H354.49V309ZM363.918 309.132C365.763 309.132 366.969 307.781 366.969 305.757C366.969 303.72 365.763 302.369 363.918 302.369C362.073 302.369 360.867 303.72 360.867 305.757C360.867 307.781 362.073 309.132 363.918 309.132ZM363.923 308.062C362.717 308.062 362.154 307.01 362.154 305.753C362.154 304.5 362.717 303.435 363.923 303.435C365.12 303.435 365.683 304.5 365.683 305.753C365.683 307.01 365.12 308.062 363.923 308.062ZM370.297 309.145C371.379 309.145 371.988 308.595 372.231 308.105H372.282V309H373.527V304.653C373.527 302.749 372.027 302.369 370.987 302.369C369.802 302.369 368.711 302.847 368.285 304.04L369.483 304.312C369.67 303.848 370.147 303.401 371.004 303.401C371.826 303.401 372.248 303.831 372.248 304.572V304.602C372.248 305.067 371.771 305.058 370.595 305.195C369.355 305.339 368.085 305.663 368.085 307.151C368.085 308.438 369.052 309.145 370.297 309.145ZM370.574 308.122C369.853 308.122 369.333 307.798 369.333 307.168C369.333 306.486 369.939 306.243 370.676 306.145C371.089 306.089 372.069 305.979 372.252 305.795V306.639C372.252 307.415 371.635 308.122 370.574 308.122ZM377.674 309.128C378.867 309.128 379.336 308.399 379.566 307.982H379.673V309H380.917V300.273H379.643V303.516H379.566C379.336 303.111 378.901 302.369 377.683 302.369C376.102 302.369 374.938 303.618 374.938 305.74C374.938 307.858 376.085 309.128 377.674 309.128ZM377.955 308.041C376.817 308.041 376.225 307.04 376.225 305.727C376.225 304.428 376.805 303.452 377.955 303.452C379.067 303.452 379.664 304.359 379.664 305.727C379.664 307.104 379.055 308.041 377.955 308.041ZM386.013 300.273V309H387.266V302.68H387.347L389.921 308.987H390.961L393.535 302.685H393.616V309H394.869V300.273H393.271L390.492 307.057H390.39L387.612 300.273H386.013ZM399.438 309.132C401.283 309.132 402.489 307.781 402.489 305.757C402.489 303.72 401.283 302.369 399.438 302.369C397.593 302.369 396.387 303.72 396.387 305.757C396.387 307.781 397.593 309.132 399.438 309.132ZM399.442 308.062C398.236 308.062 397.674 307.01 397.674 305.753C397.674 304.5 398.236 303.435 399.442 303.435C400.64 303.435 401.202 304.5 401.202 305.753C401.202 307.01 400.64 308.062 399.442 308.062ZM403.911 309H405.185V305.003C405.185 304.146 405.846 303.528 406.749 303.528C407.013 303.528 407.312 303.575 407.414 303.605V302.386C407.286 302.369 407.035 302.357 406.873 302.357C406.106 302.357 405.45 302.791 405.211 303.494H405.143V302.455H403.911V309ZM411.103 309.132C412.531 309.132 413.541 308.429 413.831 307.364L412.625 307.146C412.395 307.764 411.841 308.08 411.116 308.08C410.025 308.08 409.292 307.372 409.258 306.111H413.912V305.659C413.912 303.294 412.497 302.369 411.014 302.369C409.19 302.369 407.988 303.759 407.988 305.77C407.988 307.803 409.173 309.132 411.103 309.132ZM409.262 305.156C409.314 304.227 409.987 303.422 411.022 303.422C412.011 303.422 412.659 304.155 412.663 305.156H409.262Z",
  ru: "M348.367 302.76c0-.453-.166-.813-.498-1.078-.328-.27-.791-.405-1.389-.405-.5 0-.919.139-1.259.416-.336.274-.504.614-.504 1.02h-1.125c0-.453.123-.859.369-1.219.25-.359.598-.639 1.043-.838.445-.203.937-.304 1.476-.304.954 0 1.694.214 2.221.644.528.426.791 1.02.791 1.781 0 .395-.121.754-.363 1.078-.242.325-.58.581-1.014.768 1.004.336 1.506 1.002 1.506 1.998 0 .766-.285 1.373-.855 1.822-.571.45-1.332.674-2.286.674-.566 0-1.082-.099-1.546-.299-.461-.203-.821-.49-1.079-.861-.257-.371-.386-.812-.386-1.324h1.125c0 .449.177.824.533 1.125.355.297.807.445 1.353.445.614 0 1.102-.142 1.465-.428.367-.285.551-.662.551-1.13 0-1-.619-1.51-1.857-1.53h-1.055v-.926h1.049c.57-.011 1.002-.14 1.295-.386.293-.246.439-.594.439-1.043ZM354.859 309c-.062-.125-.113-.348-.152-.668-.504.523-1.105.785-1.805.785-.625 0-1.138-.176-1.541-.527-.398-.356-.597-.805-.597-1.348 0-.66.25-1.172.75-1.535.504-.367 1.211-.551 2.121-.551h1.054v-.498c0-.379-.113-.679-.339-.902-.227-.227-.561-.34-1.002-.34-.387 0-.711.098-.973.293-.262.195-.393.432-.393.709h-1.089c0-.316.111-.621.334-.914.226-.297.531-.531.914-.703.386-.172.81-.258 1.271-.258.731 0 1.303.184 1.717.551.414.363.629.865.644 1.506v2.918c0 .582.075 1.044.223 1.388V309h-1.137Zm-1.798-.826c.339 0 .662-.088.966-.264.305-.176.526-.404.662-.685v-1.301h-.849c-1.328 0-1.992.388-1.992 1.166 0 .34.113.605.34.797.226.191.517.287.873.287ZM361.568 303.557h-2.923V309h-1.09v-6.34h4.013v.897ZM367.867 305.9c0 .965-.221 1.743-.662 2.332-.441.59-1.039.885-1.793.885-.769 0-1.375-.244-1.816-.732v3.053h-1.084v-8.778h.99l.053.703c.441-.547 1.054-.82 1.84-.82.761 0 1.363.287 1.804.861.446.575.668 1.373.668 2.397v.099Zm-1.084-.123c0-.715-.152-1.279-.457-1.693-.305-.414-.722-.621-1.254-.621-.656 0-1.148.291-1.476.873v3.029c.324.578.82.867 1.488.867.52 0 .932-.205 1.236-.615.309-.414.463-1.027.463-1.84ZM371.254 307.412l1.476-4.752h1.161l-2.549 7.319c-.395 1.054-1.022 1.582-1.881 1.582l-.205-.018-.404-.076v-.879l.293.023c.367 0 .652-.074.855-.222.207-.149.377-.42.51-.815l.24-.644-2.262-6.27h1.184l1.582 4.752ZM378.35 304.395c0-.297-.114-.532-.34-.704-.227-.175-.537-.263-.932-.263-.383 0-.703.099-.961.299-.254.199-.381.433-.381.703h-1.078c0-.551.231-1.002.692-1.354.461-.351 1.037-.527 1.728-.527.742 0 1.32.16 1.734.48.415.317.622.77.622 1.36 0 .285-.086.547-.258.785-.172.238-.416.428-.733.568.739.25 1.108.742 1.108 1.477 0 .582-.225 1.043-.674 1.383-.449.339-1.049.509-1.799.509-.73 0-1.334-.177-1.81-.533-.473-.359-.709-.844-.709-1.453h1.078c0 .309.136.574.41.797.277.219.621.328 1.031.328.414 0 .748-.096 1.002-.287.254-.192.381-.44.381-.744 0-.356-.107-.61-.322-.762-.211-.156-.541-.234-.991-.234h-1.084v-.914h1.178c.738-.02 1.108-.325 1.108-.914ZM385.059 302.66h1.084V309h-1.084v-4.623L382.135 309h-1.084v-6.34h1.084v4.629l2.924-4.629ZM392.594 303.539h-2.127V309h-1.084v-5.461h-2.086v-.879h5.297v.879ZM394.832 304.846h1.647c.718.008 1.287.195 1.705.562.418.367.627.865.627 1.494 0 .633-.215 1.141-.645 1.524-.43.383-1.008.574-1.734.574h-2.684v-6.34h1.084v2.186Zm0 .884v2.385h1.611c.407 0 .721-.103.944-.31.222-.211.334-.498.334-.862 0-.351-.11-.638-.328-.861-.215-.227-.518-.344-.909-.352h-1.652ZM405.771 309.117c-.859 0-1.558-.281-2.097-.844-.539-.566-.809-1.322-.809-2.267v-.199c0-.629.119-1.19.358-1.682.242-.496.578-.883 1.007-1.16.434-.281.903-.422 1.407-.422.824 0 1.465.271 1.922.814.457.543.685 1.321.685 2.332v.452h-4.295c.016.625.197 1.13.545 1.517.352.383.797.574 1.336.574.383 0 .707-.078.973-.234.265-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.391 1.224Zm-.134-5.683c-.438 0-.805.16-1.102.48-.297.316-.48.762-.551 1.336h3.176v-.082c-.031-.551-.18-.977-.445-1.277-.266-.305-.625-.457-1.078-.457ZM410.623 302.66v5.455h2.32v-5.455h1.084v5.455h2.315v-5.455h1.09v5.455h.89l-.105 2.766h-.973V309h-7.711v-6.34h1.09ZM422.131 309.117c-.86 0-1.559-.281-2.098-.844-.539-.566-.808-1.322-.808-2.267v-.199c0-.629.119-1.19.357-1.682.242-.496.578-.883 1.008-1.16.433-.281.902-.422 1.406-.422.824 0 1.465.271 1.922.814.457.543.686 1.321.686 2.332v.452h-4.295c.015.625.197 1.13.545 1.517.351.383.796.574 1.335.574.383 0 .707-.078.973-.234.266-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.39 1.224Zm-.135-5.683c-.437 0-.805.16-1.101.48-.297.316-.481.762-.551 1.336h3.176v-.082c-.032-.551-.18-.977-.446-1.277-.265-.305-.625-.457-1.078-.457Zm-1.892-2.467c0-.176.052-.322.158-.44.109-.121.269-.181.48-.181.211 0 .371.06.481.181.109.118.164.264.164.44s-.055.322-.164.439c-.11.117-.27.176-.481.176-.211 0-.371-.059-.48-.176-.106-.117-.158-.263-.158-.439Zm2.519.012c0-.176.053-.325.158-.446.11-.121.27-.181.481-.181.211 0 .371.06.48.181.11.121.164.27.164.446 0 .175-.054.322-.164.439-.109.117-.269.176-.48.176-.211 0-.371-.059-.481-.176-.105-.117-.158-.264-.158-.439Z",
  uz: "",
};

export const Infinite = () => (
  <svg viewBox="0 0 769 356" fill="none" className="invert-on-dark">
    <path
      d="M5 0.5H763C765.485 0.5 767.5 2.51472 767.5 5V351C767.5 353.485 765.485 355.5 763 355.5H5.00002C2.51473 355.5 0.5 353.485 0.5 351V5C0.5 2.51472 2.51472 0.5 5 0.5Z"
      fill="white"
      stroke="#EEEEEE"
    />
    <path d="M21 26H747V40H21V26Z" fill="#E5E5E5" />
    <path d="M21 70H747V84H21V70Z" fill="#E5E5E5" />
    <path d="M21 114H747V128H21V114Z" fill="#E5E5E5" />
    <path d="M21 158H747V172H21V158Z" fill="#E5E5E5" />
    <path d="M21 202H747V216H21V202Z" fill="#E5E5E5" />
    <path d="M21 246H747V260H21V246Z" fill="#E5E5E5" />
    <rect
      x="21.5"
      y="288.5"
      width="725"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={Draw(LOAD_MORE)} fill="#454545" />
  </svg>
);
