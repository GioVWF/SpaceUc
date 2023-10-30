var head_base = document.querySelector(".head_icon_hiden");
var head_base_svg = head_base.querySelector("svg");
var original_head = head_base_svg.outerHTML;

var body_base = document.querySelector(".body_icon_hiden");
var body_base_svg = body_base.querySelector("svg");
var original_body = body_base_svg.outerHTML;

var background_base = document.querySelector(".background_icon_hiden");
var background_base_svg = background_base.querySelector("svg");
var original_background = background_base_svg.outerHTML;


function selection_head(option, color, name) {
   
    h = document.querySelector(".head_icon");
    svg = h.querySelector("svg")
    c = svg.querySelector("circle")
    svgalien_head = `
    <svg  viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="125" cy="125" r="124.5" fill="#577556" stroke="black" stroke-width="2" class = "head_hover" id = "alien_default_head"/>
    <path d="M91.7266 79.9177C110.369 95.3363 122.608 111.31 110.497 125.955C98.3852 140.599 80.3984 131.574 61.7557 116.156C43.1129 100.737 30.8739 84.7632 42.9855 70.119C55.0971 55.4748 73.0839 64.4991 91.7266 79.9177Z" fill="black"/>
    <path d="M91.7266 79.9177C110.369 95.3363 122.608 111.31 110.497 125.955C98.3852 140.599 80.3984 131.574 61.7557 116.156C43.1129 100.737 30.8739 84.7632 42.9855 70.119C55.0971 55.4748 73.0839 64.4991 91.7266 79.9177Z" fill="black"/>
    <path d="M91.7266 79.9177C110.369 95.3363 122.608 111.31 110.497 125.955C98.3852 140.599 80.3984 131.574 61.7557 116.156C43.1129 100.737 30.8739 84.7632 42.9855 70.119C55.0971 55.4748 73.0839 64.4991 91.7266 79.9177Z" stroke="black"/>
    <path d="M196.178 117.197C176.546 134.05 157.695 144.291 145.316 129.872C132.937 115.453 145.915 98.3691 165.546 81.5158C185.177 64.6624 204.029 54.4214 216.408 68.8406C228.786 83.2597 215.809 100.344 196.178 117.197Z" fill="black"/>
    <path d="M196.178 117.197C176.546 134.05 157.695 144.291 145.316 129.872C132.937 115.453 145.915 98.3691 165.546 81.5158C185.177 64.6624 204.029 54.4214 216.408 68.8406C228.786 83.2597 215.809 100.344 196.178 117.197Z" fill="black"/>
    <path d="M196.178 117.197C176.546 134.05 157.695 144.291 145.316 129.872C132.937 115.453 145.915 98.3691 165.546 81.5158C185.177 64.6624 204.029 54.4214 216.408 68.8406C228.786 83.2597 215.809 100.344 196.178 117.197Z" stroke="black"/>
    </svg>
`;

    svgdefault_head = `
    <svg  viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="125" cy="125" r="124" fill="white" stroke="black" stroke-width="2" class = "head_hover"/>
</svg>
`;
    document.getElementById("head_final_election").value = option;

    //DEFAULT
    if (color == 4 && name.includes("default_head")) {
        
        svg.innerHTML = svgdefault_head;
        c = svg.querySelector("circle"); 
        c.style.fill = "purple";
    }
    if (color == 3 && name.includes("default_head")) {
        
        svg.innerHTML = svgdefault_head;
        c = svg.querySelector("circle"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("default_head")) {
        
        svg.innerHTML = svgdefault_head;
        c = svg.querySelector("circle"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("default_head")) {
        
        svg.innerHTML = svgdefault_head;
        c = svg.querySelector("circle");  
        c.style.fill = "red";
        
    }
    if (color == 0 && name == "default_head") {
        svg.innerHTML = svgdefault_head;
        
    }

    //ALIEN
    if (color == 3&& name.includes("alien")) {
        svg.innerHTML = svgalien_head;
        c = svg.querySelector("circle"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("alien")) {
        svg.innerHTML = svgalien_head;
        c = svg.querySelector("circle"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("alien")) {
        
        svg.innerHTML = svgalien_head;
        c = svg.querySelector("circle");  
        c.style.fill = "red";
        
    }
    if (color == 0 && name.includes("alien")) {
        svg.innerHTML = svgalien_head;
       
    }

};


function selection_body(option, color, name) {
    h = document.querySelector(".body_icon");
    svg = h.querySelector("svg")
    c = svg.querySelector("path")

    svgalien_body =  `
    <svg viewBox="0 0 380 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M379 125C379 159.073 358.007 190.049 323.801 212.553C289.603 235.052 242.3 249 190 249C137.7 249 90.3974 235.052 56.1993 212.553C21.993 190.049 1 159.073 1 125C1 90.9268 21.993 59.9512 56.1993 37.4471C90.3974 14.9484 137.7 1 190 1C242.3 1 289.603 14.9484 323.801 37.4471C358.007 59.9512 379 90.9268 379 125Z" fill="#577556" stroke="black" stroke-width="2" class = "body_hover"/>
<path d="M292.655 138.674L294.456 138.339L296.589 137.953L297.379 142.412L298.634 146.219L301.819 152.413L307.09 158.887L314.359 165.165L323.229 169.112L322.211 171.844L317.639 169.133L312.175 167.097L308.203 163.512L304.232 159.927L299.323 152.877L295.588 146.354L293.72 143.092L292.655 138.674Z" fill="#FF0000"/>
<path d="M269.754 113.951C270.43 115.429 265.556 122.941 263.9 123.002C262.244 123.062 260.804 120.422 260.683 117.105C260.266 112.154 268.075 107.652 272.282 108.396C273.418 108.597 268.897 112.076 269.754 113.951Z" fill="#FD0000"/>
<path d="M314.253 127.105L330.281 121.523L337.846 143.243L341.629 154.103L342.968 156.459L344.254 159.103L345.294 161.961L345.411 164.963L344.023 168.808L338.763 173.345L335.779 176.443L329.376 177.632L324.325 175.011L321.902 172.918L322.646 168.711L324.247 166.38L327.093 165.342L326.546 162.401L325.601 159.686L321.818 148.825L314.253 127.105Z" fill="#FF0000"/>
<path d="M249.782 118.679L250.765 118.496L252.731 118.131L257.155 117.309L264.976 116.437L281.944 115.392L282.436 123.377L265.468 124.422L257.451 124.374L253.335 124.121L250.786 124.086L249.712 123.777L249.529 122.794L249.255 121.319L249.394 119.332L249.782 118.679Z" fill="#C8C8C8"/>
<path d="M282.347 132.462L309.876 127.348L309.989 133.43L303.598 134.617L296.99 137.37L292.748 139.175L289.216 139.323L288.359 137.448L286.392 137.813L284.061 136.212L282.712 134.429L282.347 132.462Z" fill="#FF0000"/>
<path d="M316.997 130.094L312.082 131.007L312.629 133.956L314.652 136.632L314.709 139.673L314.273 142.805L319.681 141.8L318.093 135.993L316.997 130.094Z" fill="black"/>
<path d="M346.386 96.6636L347.151 98.047L344.811 104.249L343.236 111.834L340.086 127.004L322.168 114.973L335.196 105.25L340.791 100.957L344.911 96.9376L346.386 96.6636Z" fill="#BCBCBC"/>
<path d="M356.496 103.443L356.686 104.662L352.896 109.738L349.297 116.034L342.097 128.624L331.399 117.278L344.861 109.943L350.678 106.693L355.226 103.576L356.496 103.443Z" fill="#BCBCBC"/>
<path d="M362.785 118.269L362.105 119.297L355.884 120.497L348.983 122.724L335.181 127.179L334.917 111.586L349.808 115.234L356.296 116.752L361.757 117.512L362.785 118.269Z" fill="#BCBCBC"/>
<path d="M353.388 115.196C354.901 123.341 350.629 130.457 341.38 132.683C309.153 137.145 303.994 131.273 302.481 123.128C300.968 114.983 311.852 104.119 335.81 102.696C343.858 102.218 351.875 107.051 353.388 115.196Z" fill="#FF0000"/>
<path d="M306.814 121.814C308.03 128.362 316.973 130.257 307.616 132.405C275.132 137.213 266.904 128.72 267.135 119.014C269.459 106.886 285.642 112.125 309.72 110.086C317.809 109.401 305.597 115.266 306.814 121.814Z" fill="#FF0000"/>
<path d="M250.639 120.554C251.643 125.961 247.745 125.16 244.487 125.765C234.712 130.632 229.739 128.505 229.627 122.423C229.533 117.355 231.824 112.352 242.935 117.408C246.192 116.803 249.983 117.024 250.639 120.554Z" fill="#FD0000"/>
<line x1="250.231" y1="121.015" x2="251.241" y2="104.553" stroke="#F20000"/>
<ellipse cx="250.967" cy="101.53" rx="2.42723" ry="3.61867" transform="rotate(-4.42983 250.967 101.53)" fill="#F80000"/>
<line y1="-0.5" x2="12.7105" y2="-0.5" transform="matrix(-0.999944 0.0105466 0.160515 -0.987033 240.644 121.504)" stroke="#F20000"/>
<ellipse cx="1.33337" cy="2.82385" rx="1.33337" ry="2.82385" transform="matrix(-0.0309517 -0.999521 0.994077 -0.108676 222.769 123.835)" fill="#F80000"/>
<circle cx="335.909" cy="116.918" r="2.5" transform="rotate(-10.5242 335.909 116.918)" fill="#86881B"/>
<path d="M323.528 118.709C322.995 115.841 323.831 112.84 325.851 110.366C327.871 107.893 330.91 106.15 334.3 105.52C337.69 104.89 341.153 105.426 343.926 107.008C346.7 108.591 348.558 111.092 349.091 113.96L342.128 115.254C341.885 113.948 341.04 112.81 339.777 112.089C338.514 111.368 336.938 111.125 335.395 111.411C333.851 111.698 332.468 112.492 331.548 113.618C330.629 114.744 330.248 116.11 330.491 117.416L323.528 118.709Z" fill="#1D7907"/>
<path d="M323.528 118.709C322.995 115.841 323.831 112.84 325.851 110.366C327.871 107.893 330.91 106.15 334.3 105.52C337.69 104.89 341.153 105.426 343.926 107.008C346.7 108.591 348.558 111.092 349.091 113.96L342.128 115.254C341.885 113.948 341.04 112.81 339.777 112.089C338.514 111.368 336.938 111.125 335.395 111.411C333.851 111.698 332.468 112.492 331.548 113.618C330.629 114.744 330.248 116.11 330.491 117.416L323.528 118.709Z" fill="#560808"/>
<path d="M323.528 118.709C323.131 116.573 323.491 114.345 324.562 112.307C325.633 110.27 327.368 108.514 329.547 107.26L333.231 112.204C332.239 112.774 331.449 113.574 330.962 114.501C330.474 115.429 330.31 116.443 330.491 117.416L323.528 118.709Z" fill="#1D7907"/>
<path d="M323.528 118.709C323.131 116.573 323.491 114.345 324.562 112.307C325.633 110.27 327.368 108.514 329.547 107.26L333.231 112.204C332.239 112.774 331.449 113.574 330.962 114.501C330.474 115.429 330.31 116.443 330.491 117.416L323.528 118.709Z" fill="#1D7907"/>
<path d="M328.985 107.601C331.092 106.256 333.58 105.453 336.136 105.292C338.692 105.131 341.2 105.62 343.345 106.697L339.512 111.947C338.536 111.457 337.394 111.235 336.23 111.308C335.067 111.381 333.934 111.747 332.975 112.359L328.985 107.601Z" fill="#1D7907"/>
<path d="M328.985 107.601C331.092 106.256 333.58 105.453 336.136 105.292C338.692 105.131 341.2 105.62 343.345 106.697L339.512 111.947C338.536 111.457 337.394 111.235 336.23 111.308C335.067 111.381 333.934 111.747 332.975 112.359L328.985 107.601Z" fill="#D0B213"/>
<path d="M101.368 131.552L99.5017 130.962L97.2898 130.273L95.9635 134.603L94.2178 138.216L90.1687 143.934L83.8842 149.632L75.5102 154.85L65.7015 157.517L66.476 160.384L71.6065 158.336L77.605 157.086L82.1975 154.08L86.7899 151.075L92.7546 144.751L97.4215 138.785L99.755 135.801L101.368 131.552Z" fill="#FF0000"/>
<path d="M128.295 110.186C127.419 111.562 131.74 119.741 133.483 120.037C135.226 120.333 137.039 117.909 137.533 114.621C138.52 109.748 130.764 104.149 126.237 104.291C125.015 104.329 129.408 108.44 128.295 110.186Z" fill="#FD0000"/>
<path d="M79.8202 116.947L63.4984 109.1L53.1081 129.661L47.9129 139.942L46.2379 142.098L44.5868 144.548L43.1729 147.248L42.7178 150.222L43.7603 154.251L48.8181 159.521L51.6303 163.032L58.2655 165.13L63.8922 163.238L66.6839 161.498L66.3615 157.202L64.9268 154.65L62.0339 153.211L62.936 150.358L64.2348 147.788L69.4299 137.508L79.8202 116.947Z" fill="#FF0000"/>
<path d="M148.88 117.743L147.861 117.421L145.823 116.777L141.239 115.327L133.07 113.344L115.255 109.884L113.854 117.769L131.67 121.229L140.147 122.324L144.524 122.659L147.222 122.987L148.391 122.833L148.693 121.879L149.145 120.449L149.217 118.449L148.88 117.743Z" fill="#C8C8C8"/>
<path d="M112.946 126.833L84.419 117.813L83.629 123.856L90.2514 125.95L96.9309 129.635L101.214 132.038L104.931 132.689L106.043 130.943L108.081 131.587L110.721 130.324L112.343 128.739L112.946 126.833Z" fill="#FF0000"/>
<path d="M76.5905 119.533L81.6846 121.144L80.7801 124.004L78.3475 126.381L77.9525 129.403L78.0669 132.585L72.4633 130.814L74.7816 125.254L76.5905 119.533Z" fill="black"/>
<path d="M49.2224 82.0376L48.2608 83.3067L50.0498 89.819L50.8773 97.6004L52.5322 113.163L72.7941 103.731L60.0999 92.1875L54.6611 87.1125L50.7506 82.5208L49.2224 82.0376Z" fill="#BCBCBC"/>
<path d="M37.7903 87.3508L37.4556 88.5375L40.8998 94.1357L44.0094 100.921L50.2284 114.49L62.7857 104.712L49.369 95.4847L43.5797 91.4178L39.1173 87.6642L37.7903 87.3508Z" fill="#BCBCBC"/>
<path d="M29.5089 101.225L30.1147 102.346L36.556 104.428L43.603 107.631L57.6971 114.037L59.6955 98.54L43.5575 100.051L36.5332 100.638L30.6786 100.617L29.5089 101.225Z" fill="#BCBCBC"/>
<path d="M39.778 99.5026C37.2805 107.401 41.0101 115.1 50.5382 118.637C84.1021 127.676 90.202 122.561 92.6995 114.663C95.1971 106.764 84.8936 94.3889 59.7332 89.5558C51.2812 87.9323 42.2755 91.6038 39.778 99.5026Z" fill="#FF0000"/>
<path d="M88.2654 112.736C86.2576 119.086 76.5979 119.7 86.2495 123.173C120.046 132.594 129.678 125.306 130.505 115.604C129.387 103.189 111.708 106.101 86.4877 100.637C78.0156 98.8018 90.2732 106.386 88.2654 112.736Z" fill="#FF0000"/>
<path d="M147.767 119.489C146.109 124.733 150.317 124.49 153.693 125.558C163.486 131.801 168.976 130.39 169.766 124.347C170.424 119.311 168.554 114 156.256 117.453C152.88 116.386 148.85 116.066 147.767 119.489Z" fill="#FD0000"/>
<line y1="-0.5" x2="16.561" y2="-0.5" transform="matrix(0.0451857 -0.998979 -0.997082 -0.0763346 147.617 119.966)" stroke="#F20000"/>
<ellipse cx="2.59177" cy="3.62156" rx="2.59177" ry="3.62156" transform="matrix(-0.978724 -0.205181 -0.191454 0.981502 152.749 97.4661)" fill="#F80000"/>
<line y1="-0.5" x2="13.5566" y2="-0.5" transform="matrix(0.989649 0.143512 -0.0602533 -0.998183 158.224 121.861)" stroke="#F20000"/>
<ellipse cx="1.33556" cy="3.01634" rx="1.33556" ry="3.01634" transform="matrix(0.142736 -0.989761 -0.972227 -0.234038 176.856 126.731)" fill="#F80000"/>
<ellipse cx="2.67134" cy="2.5" rx="2.67134" ry="2.5" transform="matrix(-0.953474 -0.301475 -0.301475 0.953474 61.3599 102.132)" fill="#86881B"/>
<path d="M70.9452 107.26C71.8248 104.478 71.2728 101.369 69.4109 98.6171C67.549 95.8648 64.5295 93.6946 61.0168 92.5839C57.5041 91.4733 53.7859 91.5131 50.6801 92.6947C47.5743 93.8762 45.3354 96.1027 44.4559 98.8844L51.6711 101.166C52.0715 99.8994 53.0907 98.8858 54.5046 98.3479C55.9184 97.81 57.6111 97.7919 59.2102 98.2975C60.8094 98.8031 62.1839 99.7911 63.0316 101.044C63.8792 102.297 64.1304 103.712 63.73 104.979L70.9452 107.26Z" fill="#1D7907"/>
<path d="M70.9452 107.26C71.8248 104.478 71.2728 101.369 69.4109 98.6171C67.549 95.8648 64.5295 93.6946 61.0168 92.5839C57.5041 91.4733 53.7859 91.5131 50.6801 92.6947C47.5743 93.8762 45.3354 96.1027 44.4559 98.8844L51.6711 101.166C52.0715 99.8994 53.0907 98.8858 54.5046 98.3479C55.9184 97.81 57.6111 97.7919 59.2102 98.2975C60.8094 98.8031 62.1839 99.7911 63.0316 101.044C63.8792 102.297 64.1304 103.712 63.73 104.979L70.9452 107.26Z" fill="#560808"/>
<path d="M70.9452 107.26C71.6004 105.188 71.4658 102.917 70.5586 100.735C69.6513 98.5518 68.012 96.5548 65.8475 94.9954L61.4093 99.3953C62.3947 100.105 63.141 101.014 63.554 102.008C63.967 103.002 64.0283 104.035 63.73 104.979L70.9452 107.26Z" fill="#1D7907"/>
<path d="M70.9452 107.26C71.6004 105.188 71.4658 102.917 70.5586 100.735C69.6513 98.5518 68.012 96.5548 65.8475 94.9954L61.4093 99.3953C62.3947 100.105 63.141 101.014 63.554 102.008C63.967 103.002 64.0283 104.035 63.73 104.979L70.9452 107.26Z" fill="#1D7907"/>
<path d="M66.4041 95.4152C64.3259 93.7752 61.7849 92.6201 59.1019 92.0954C56.4188 91.5708 53.7138 91.7003 51.3283 92.4674L54.7997 98.2445C55.8856 97.8952 57.117 97.8363 58.3385 98.0751C59.5599 98.314 60.7167 98.8398 61.6628 99.5864L66.4041 95.4152Z" fill="#1D7907"/>
<path d="M66.4041 95.4152C64.3259 93.7752 61.7849 92.6201 59.1019 92.0954C56.4188 91.5708 53.7138 91.7003 51.3283 92.4674L54.7997 98.2445C55.8856 97.8952 57.117 97.8363 58.3385 98.0751C59.5599 98.314 60.7167 98.8398 61.6628 99.5864L66.4041 95.4152Z" fill="#D0B213" />
</svg>
`;
    
    
    svgdefault_body =  `
    <svg  viewBox="0 0 380 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M379 125C379 159.073 358.007 190.049 323.801 212.553C289.603 235.052 242.3 249 190 249C137.7 249 90.3974 235.052 56.1993 212.553C21.993 190.049 1 159.073 1 125C1 90.9268 21.993 59.9512 56.1993 37.4471C90.3974 14.9484 137.7 1 190 1C242.3 1 289.603 14.9484 323.801 37.4471C358.007 59.9512 379 90.9268 379 125Z" fill="currentColor" stroke="black" stroke-width="2" class = "body_hover"/>
</svg>
`;

    document.getElementById("body_final_election").value = option;
    //Default
    if (color == 3 && name.includes("default_body")) {
        
        svg.innerHTML = svgdefault_body;
        c = svg.querySelector("path"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("default_body")) {
        svg.innerHTML = svgdefault_body;
        c = svg.querySelector("path"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("default_body")) {
        svg.innerHTML = svgdefault_body;
        c = svg.querySelector("path"); 
        c.style.fill = "red";
    }
    
    if (color == 0 && name == "default_body") {
        svg.innerHTML = svgdefault_body;
        c.style.fill = "white";
    }

    //Alien
    if (color == 3 && name.includes("alien")) {
        
        svg.innerHTML = svgalien_body;
        c = svg.querySelector("path"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("alien")) {
        svg.innerHTML = svgalien_body;
        c = svg.querySelector("path"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("alien")) {
        svg.innerHTML = svgalien_body;
        c = svg.querySelector("path"); 
        c.style.fill = "red";
    }

    if (color == 0 && name == "alien_default_body") {
        svg.innerHTML = svgalien_body;
        c.style.fill = "#577556";
    }
};


function selection_backgraund(option, color, name) {
    h = document.querySelector(".background_icon");
    svg = h.querySelector("svg")
    c = svg.querySelector("circle")
    svgalien_background = `
    <svg  viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="250" cy="250" r="249" fill="#1A0729" stroke="black" stroke-width="2"  class = "background_hover"/>
<circle cx="149.5" cy="63.5" r="2.5" fill="white"/>
<circle cx="121.5" cy="92.5" r="2.5" fill="white"/>
<circle cx="138.5" cy="114.5" r="2.5" fill="white"/>
<circle cx="62.5" cy="136.5" r="2.5" fill="white"/>
<circle cx="104.5" cy="182.5" r="2.5" fill="white"/>
<circle cx="41.5" cy="240.5" r="2.5" fill="white"/>
<circle cx="16.5" cy="294.5" r="2.5" fill="white"/>
<circle cx="93.5" cy="271.5" r="2.5" fill="white"/>
<circle cx="49.5" cy="348.5" r="2.5" fill="white"/>
<circle cx="441.5" cy="339.5" r="2.5" fill="white"/>
<circle cx="358.5" cy="266.5" r="2.5" fill="white"/>
<circle cx="437.208" cy="213.809" r="2.5" transform="rotate(115.399 437.208 213.809)" fill="white"/>
<circle cx="468.331" cy="270.331" r="2.5" transform="rotate(115.399 468.331 270.331)" fill="white"/>
<circle cx="423.02" cy="176.077" r="2.5" transform="rotate(115.399 423.02 176.077)" fill="white"/>
<circle cx="381.331" cy="160.331" r="2.5" transform="rotate(115.399 381.331 160.331)" fill="white"/>
<circle cx="426.331" cy="267.331" r="2.5" transform="rotate(115.399 426.331 267.331)" fill="white"/>
<circle cx="385.331" cy="238.331" r="2.5" transform="rotate(115.399 385.331 238.331)" fill="white"/>
<circle cx="408.579" cy="103.908" r="2.5" transform="rotate(115.399 408.579 103.908)" fill="white"/>
<circle cx="359.331" cy="102.331" r="2.5" transform="rotate(115.399 359.331 102.331)" fill="white"/>
<circle cx="218.331" cy="33.3306" r="2.5" transform="rotate(115.399 218.331 33.3306)" fill="white"/>
<circle cx="323.638" cy="40.3306" r="2.5" transform="rotate(115.399 323.638 40.3306)" fill="white"/>
<circle cx="266.331" cy="45.3306" r="2.5" transform="rotate(115.399 266.331 45.3306)" fill="white"/>
<circle cx="179.331" cy="23.3306" r="2.5" transform="rotate(115.399 179.331 23.3306)" fill="white"/>
</svg>
`;

    svgdefault_background = `
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="250" cy="250" r="249" fill="currentColor" stroke="black" stroke-width="2" class = "background_hover"/>
</svg>
`;
    document.getElementById("backgraund_final_election").value = option;

    //Default 
    if (color == 3 && name.includes("default_background")) {
        svg.innerHTML = svgdefault_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("default_background")) {
        svg.innerHTML = svgdefault_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("default_background")) {
        svg.innerHTML = svgdefault_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "red";
    }
    
    if (color == 0 && name == "default_background") {
        svg.innerHTML = svgdefault_background;
        c = svg.querySelector("circle"); 
        svg.innerHTML = svgdefault_background;
        c.style.fill = "white";
    }

    //Alien
    if (color == 3 && name.includes("alien")) {
        svg.innerHTML = svgalien_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "yellow";
    }
    if (color == 2 && name.includes("alien")) {
        svg.innerHTML = svgalien_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "blue";
    }
    if (color == 1 && name.includes("alien")) {
        svg.innerHTML = svgalien_background;
        c = svg.querySelector("circle"); 
        c.style.fill = "red";
    }
    if (color == 0 && name.includes("alien")) {
        svg.innerHTML = svgalien_background;
        c.style.fill = "#577556";
    }
};


function customReset(){
    head = document.querySelector(".head_icon");
    svg_head = head.querySelector("svg");
    
    
    body = document.querySelector(".body_icon");
    svg_body = body.querySelector("svg");
    

    backgraund = document.querySelector(".background_icon");
    svg_backgraund = backgraund.querySelector("svg");
    

    svg_head.outerHTML = original_head;
    svg_body.outerHTML = original_body;
    svg_backgraund.outerHTML = original_background;
}

const get_color_head = async (id,color,name,points) =>{
    const response = await fetch(`get_color_head/${id}`);
    const data = await response.json();
    const iconContainer = document.getElementById("color_head");
   
    selection_head(id,color,name);
    if (data.message === "Found it" && data.array_colors) {
        const responseArray = JSON.parse(data.array_colors); //of json to object
        
        const svgIconsWithPK = responseArray.map(icon => ({
            pk: icon.pk,
            name_icon: icon.fields.name_icon,
            svg_icon: icon.fields.svg_icon,
            color: icon.fields.color,
          }));

        while (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);

        }

        svgIconsWithPK.forEach(icon => {
            
            const iconDiv = document.createElement("div");
            

            //DEFAULT
            if(icon.name_icon.includes("default_head") && !icon.name_icon.includes("alien") && icon.color == 0  && points >= 0 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default</label>
            `;
            }
            else if(icon.name_icon.includes("default_head") && !icon.name_icon.includes("alien") && icon.color == 1  && points >= 50 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>red</label>
            `;
            }
            else if(icon.name_icon.includes("default_head") && !icon.name_icon.includes("alien") && icon.color == 2  && points >= 100 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>blue</label>
            `;
            }
            else if(icon.name_icon.includes("default_head") && !icon.name_icon.includes("alien") && icon.color == 3  && points >= 150 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>yellow</label>
            `;
            }
            else if(icon.name_icon.includes("default_head") && !icon.name_icon.includes("alien") && icon.color == 4  && points >= 500 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>PURPLE</label>
            `;
            }
            //ALIEN
            else if(icon.name_icon.includes("alien_default_head") && icon.color == 0  && points >= 200 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default alien</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_head") && icon.color == 1  && points >= 250 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien red</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_head") && icon.color == 2  && points >= 300 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien blue</label>
            `;
            }
            else if(icon.name_icon.includes("alien_default_head") && icon.color == 3  && points >= 350 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien yellow</label>
            `;
            }

            else{
                iconDiv.className = "unlock";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_head(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>Nep</label>
            `;
            }
            
           

            
            iconContainer.appendChild(iconDiv);

          });
    } else {
        console.log("No se encontró ningún ícono.");
    }
}


const get_color_body = async(id, color, name, points) =>{
    const response = await fetch(`get_color_body/${id}`);
    const data = await response.json();
    const iconContainer = document.getElementById("color_body");
    
    selection_body(id,color,name);

    if (data.message === "Found it" && data.array_colors) {
        const responseArray = JSON.parse(data.array_colors); //of json to object
        const svgIconsWithPK = responseArray.map(icon => ({
            pk: icon.pk,
            name_icon: icon.fields.name_icon,
            svg_icon: icon.fields.svg_icon,
            color: icon.fields.color,
          }));
        
        while (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);

        }

        svgIconsWithPK.forEach(icon => {
            
            const iconDiv = document.createElement("div");
            
             //DEFAULT
             if(icon.name_icon.includes("default_body") && !icon.name_icon.includes("alien") && icon.color == 0  && points >= 0 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default</label>
            `;
            }
            else if(icon.name_icon.includes("default_body") && !icon.name_icon.includes("alien") && icon.color == 1  && points >= 50 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>red</label>
            `;
            }
            else if(icon.name_icon.includes("default_body") && !icon.name_icon.includes("alien") && icon.color == 2  && points >= 100 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>blue</label>
            `;
            }
            else if(icon.name_icon.includes("default_body") && !icon.name_icon.includes("alien") && icon.color == 3  && points >= 150 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>yellow</label>
            `;
            }
            //Alien
            else if(icon.name_icon.includes("alien_default_body") && icon.color == 0  && points >= 200 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default alien</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_body") && icon.color == 1  && points >= 250 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien red</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_body") && icon.color == 2  && points >= 300 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien blue</label>
            `;
            }
            else if(icon.name_icon.includes("alien_default_body") && icon.color == 3  && points >= 350 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien yellow</label>
            `;
            }

            else{
                iconDiv.className = "unlock";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_body(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>Nep</label>
            `;
            }

            
            iconContainer.appendChild(iconDiv);

          });
    } else {
        console.log("No se encontró ningún ícono.");
    }

}



const get_color_background = async(id, color, name, points) =>{
    const response = await fetch(`get_color_background/${id}`);
    const data = await response.json();
    const iconContainer = document.getElementById("color_backgraund");
    
    selection_backgraund(id,color,name);

    if (data.message === "Found it" && data.array_colors) {
        const responseArray = JSON.parse(data.array_colors); //of json to object
        const svgIconsWithPK = responseArray.map(icon => ({
            pk: icon.pk,
            name_icon: icon.fields.name_icon,
            svg_icon: icon.fields.svg_icon,
            color: icon.fields.color,
          }));
          

        while (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);

        }
        
        svgIconsWithPK.forEach(icon => {
            
            const iconDiv = document.createElement("div");

            //DEFAULT
            if(icon.name_icon.includes("default_background") && !icon.name_icon.includes("alien") && icon.color == 0  && points >= 0 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default</label>
            `;
            }
            else if(icon.name_icon.includes("default_background") && !icon.name_icon.includes("alien") && icon.color == 1  && points >= 50 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>red</label>
            `;
            }
            else if(icon.name_icon.includes("default_background") && !icon.name_icon.includes("alien") && icon.color == 2  && points >= 100 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>blue</label>
            `;
            }
            else if(icon.name_icon.includes("default_background") && !icon.name_icon.includes("alien") && icon.color == 3  && points >= 150 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>yellow</label>
            `;
            }
            //Alien
            else if(icon.name_icon.includes("alien_default_background") && icon.color == 0  && points >= 200 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>default alien</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_background") && icon.color == 1  && points >= 250 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien red</label>
            `;
            }

            else if(icon.name_icon.includes("alien_default_background") && icon.color == 2  && points >= 300 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien blue</label>
            `;
            }
            else if(icon.name_icon.includes("alien_default_background") && icon.color == 3  && points >= 350 && points <= 3000){
                iconDiv.className = "color_avaible";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>alien yellow</label>
            `;
            }

            else{
                iconDiv.className = "unlock";
                iconDiv.innerHTML = `
                
                <input type="checkbox" hidden id = ${icon.pk} name = ${icon.pk} value = ${icon.pk} data-new-color = ${icon.color} data-new-name = ${icon.name_icon} onclick = "selection_backgraund(this.value,this.getAttribute('data-new-color'),this.getAttribute('data-new-name'))">
                <label for = ${icon.pk}>Nep</label>
            `;
            }
            
            //ADD an element in the container
            iconContainer.appendChild(iconDiv);

          });
    } else {
        console.log("No se encontró ningún ícono.");
    }

}

document.addEventListener("DOMContentLoaded", function(){
    //VALUES HEAD
    var head_initial = document.getElementById("head_inital");
    var name_head_initial = head_initial.getAttribute("data-name");
    var id_head_initial  = head_initial.getAttribute("value");
    var color_head_initial = head_initial.getAttribute("data-color");
    var points_user = head_initial.getAttribute("data-points");

    //VALUE BODY
    var body_initial = document.getElementById("body_initial");
    var name_body_initial = body_initial.getAttribute("data-name");
    var id_body_initial  = body_initial.getAttribute("value");
    var color_body_initial = body_initial.getAttribute("data-color");
    

    //VALUE BACKGROUND
    var background_initial = document.getElementById("backgraund_initial");
    var name_background_initial = background_initial.getAttribute("data-name");
    var id_background_initial  = background_initial.getAttribute("value");
    var color_background_initial = background_initial.getAttribute("data-color");
    
    
    
    if(name_head_initial.includes("default_head")){
        
        get_color_head(id_head_initial, color_head_initial, name_head_initial, points_user);
    }
    else if(name_head_initial.includes("alien_default_head")){
        get_color_head(id_head_initial, color_head_initial, name_head_initial, points_user);
    }


    if(name_body_initial.includes("default_body")){
        
        get_color_body(id_body_initial, name_body_initial, color_body_initial, points_user);
    }
    else if(name_body_initial.includes("alien_default_head")){
        
        get_color_body(id_body_initial, name_body_initial, color_body_initial, points_user);
    }

    if(name_background_initial.includes("default_background")){
        
        get_color_background(id_background_initial, name_background_initial, color_background_initial, points_user);
    }
    else if(name_background_initial.includes("alien_default_background")){
        
        get_color_background(id_background_initial, name_background_initial, color_background_initial, points_user);
    }
});


const li = document.querySelectorAll('.li')
const block = document.querySelectorAll('.block')
var head = document.getElementById('color_head')
var body = document.getElementById('color_body')
var backgraund = document.getElementById('color_backgraund')

li.forEach((eachLi, i) => {

    li[i].addEventListener('click', () => {

        li.forEach((eachLi, i) => {
            li[i].classList.remove('active')
            block[i].classList.remove('active')
            head.classList.remove('active')
            body.classList.remove('active')
            backgraund.classList.remove('active')
        })

        li[i].classList.add('active')
        block[i].classList.add('active')


        if (i == 0) {
            head.classList.add('active')
        }
        if (i == 1) {
            body.classList.add('active')
        }
        if (i == 2) {
            backgraund.classList.add('active')
        }
    })

})




