import React from "react";

export default function CopyCatWindowTitle({
	fillNote = "#FFF255",
	fillNoteCorner = "#D8C32A",
	fillCats = "#2D2D2D",
	fillText = "#FFFFFF",
	opacityText = 0.9,
}) {
	return (
		<svg fill="none" viewBox="0 0 75 18" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 15.4828V2.51719C0 1.125 1.11181 0 2.50508 0H15.4949C16.8882 0 18.0141 1.125 18.0141 2.51719V13.8375L13.8342 18H2.50508C1.11181 18 0 16.875 0 15.4828Z"
				fill={fillNote}
				className="logo-note"
			/>
			<path
				d="M18 13.8234L13.8342 18V16.3406C13.8342 14.9484 14.9601 13.8234 16.3534 13.8234H18Z"
				fill={fillNoteCorner}
				className="logo-note-corner"
			/>
			<path
				d="M6.12201 8.70469C5.92499 8.70469 5.7561 8.87344 5.7561 9.08438C5.7561 9.28125 5.92499 9.45 6.12201 9.45C6.31904 9.45 6.47385 9.28125 6.47385 9.08438C6.47385 8.87344 6.31904 8.70469 6.12201 8.70469Z"
				fill={fillCats}
				className="logo-cats"
			/>
			<path
				d="M15.7061 7.45313C15.4668 6.8625 15.1009 6.31406 14.6083 5.87813C14.355 5.66719 14.0876 5.49844 13.7921 5.35781C13.4824 5.21719 13.1447 5.13281 12.8632 4.90781C12.624 4.71094 12.441 4.3875 12.638 4.10625C12.9054 3.72656 13.4402 3.78281 13.8202 3.92344C14.4957 4.14844 14.7772 3.10781 14.1017 2.86875C13.1306 2.53125 11.864 2.84063 11.5262 3.92344C11.3714 4.40156 11.4699 4.89375 11.7514 5.30156C12.1736 5.92031 12.8069 6.075 13.4262 6.39844C14.7772 7.14375 15.1994 8.78906 14.8617 10.2937C14.8335 10.125 14.8054 9.94219 14.7913 9.77344C14.7209 9.43594 14.6365 9.12656 14.538 8.84531C14.4957 8.71875 14.4394 8.57813 14.3691 8.45156C14.3128 8.325 14.2424 8.22656 14.1861 8.11406C14.1439 8.02969 14.0876 7.94531 14.0313 7.875C13.9469 7.74844 13.8484 7.63594 13.7498 7.5375L13.5528 7.34063C13.4965 7.29844 13.4262 7.24219 13.3699 7.2C13.2995 7.12969 13.2151 7.0875 13.1447 7.04531C13.0743 7.00313 13.018 6.975 12.9477 6.93281C12.8773 6.89063 12.7788 6.84844 12.6943 6.80625C12.6099 6.77813 12.5114 6.73594 12.4269 6.70781C12.3425 6.67969 12.2581 6.65156 12.1595 6.6375C12.1173 6.62344 12.061 6.60938 12.0047 6.60938C11.8921 6.58125 11.7796 6.56719 11.667 6.55313C11.1885 6.49688 10.6959 6.49688 10.1893 6.55313C10.147 6.32813 10.0626 6.08906 9.96408 5.85C9.97815 5.83594 9.97815 5.82188 9.99222 5.82188C10.2174 5.38594 10.2596 4.89375 10.2174 4.40156C10.1611 3.92344 10.0485 3.45938 9.76705 3.07969C9.45743 2.65781 8.7819 2.06719 8.27526 2.55938C8.12045 2.71406 8.00786 2.95313 7.90935 3.13594C7.8249 3.30469 7.74046 3.45938 7.68417 3.64219C7.20567 3.43125 6.7131 3.31875 6.16423 3.31875C5.67166 3.31875 5.19316 3.43125 4.75688 3.6C4.70059 3.44531 4.63022 3.29063 4.55985 3.13594C4.44727 2.95313 4.34875 2.71406 4.17987 2.55938C3.70137 2.06719 2.9977 2.68594 2.70215 3.07969C2.42068 3.45938 2.30809 3.9375 2.2518 4.40156C2.19551 4.85156 2.23773 5.30156 2.42068 5.70938C2.19551 6.11719 2.09699 6.525 2.09699 6.89063C2.09699 7.5375 2.43476 8.12813 3.02584 8.57813C1.85774 10.6031 0.928892 13.4437 4.22209 14.2734C3.631 13.275 3.81396 12.1922 4.39097 11.0813C4.06728 10.7578 3.8984 10.3781 3.8984 9.97031C3.8984 9.73125 3.96877 9.46406 4.08135 9.21094C3.98284 8.95781 3.95469 8.67656 3.99691 8.36719C4.02506 8.08594 4.09543 7.72031 4.3206 7.39688C4.39097 7.3125 4.72873 6.87656 5.15094 6.84844C5.31982 6.83438 5.50278 6.90469 5.62944 7.03125C5.72795 7.14375 5.79832 7.25625 5.85461 7.35469L5.95313 7.55156C6.48792 7.38281 7.02272 7.39688 7.52936 7.57969C7.55751 7.5375 7.55751 7.50938 7.58566 7.45313C7.6701 7.28438 7.75454 7.12969 7.85305 7.03125C7.99379 6.90469 8.14859 6.83438 8.3597 6.84844C8.76783 6.89063 9.07745 7.27031 9.17596 7.39688C9.40114 7.70625 9.48558 8.07188 9.51372 8.36719C9.54187 8.71875 9.49965 9.04219 9.38706 9.32344C9.41521 9.37969 9.42928 9.43594 9.45743 9.49219C12.1455 8.98594 13.6091 12.8391 11.6951 14.5266C11.8781 14.4984 12.0751 14.4562 12.2581 14.4141C12.4832 14.3719 12.6943 14.3016 12.8914 14.2312C12.9758 14.2031 13.0743 14.1609 13.1588 14.1047C13.2291 14.0766 13.2854 14.0484 13.3558 14.0203C13.3699 14.0062 13.3839 14.0062 13.398 13.9922C15.7201 12.9797 16.6068 9.68906 15.7061 7.45313ZM5.58722 5.77969C5.39019 5.77969 5.22131 5.61094 5.22131 5.41406C5.22131 5.20313 5.39019 5.03438 5.58722 5.03438C5.78425 5.03438 5.95313 5.20313 5.95313 5.41406C5.95313 5.61094 5.78425 5.77969 5.58722 5.77969ZM7.17752 5.9625H6.95235C6.85383 5.9625 6.76939 5.87813 6.76939 5.77969C6.76939 5.66719 6.85383 5.58281 6.95235 5.58281H7.17752C7.29011 5.58281 7.37455 5.66719 7.37455 5.77969C7.37455 5.87813 7.29011 5.9625 7.17752 5.9625ZM8.54265 5.77969C8.34562 5.77969 8.17674 5.61094 8.17674 5.41406C8.17674 5.20313 8.34562 5.03438 8.54265 5.03438C8.73968 5.03438 8.90856 5.20313 8.90856 5.41406C8.90856 5.61094 8.73968 5.77969 8.54265 5.77969Z"
				fill={fillCats}
				className="logo-cats"
			/>
			<path
				d="M7.3464 9.63281H7.12122C7.00863 9.63281 6.92419 9.54843 6.92419 9.43593C6.92419 9.32343 7.00863 9.23906 7.12122 9.23906H7.3464C7.45899 9.23906 7.54343 9.32343 7.54343 9.43593C7.54343 9.54843 7.45899 9.63281 7.3464 9.63281Z"
				fill={fillCats}
				className="logo-cats"
			/>
			<path
				d="M8.27521 8.70469C8.07818 8.70469 7.9093 8.87344 7.9093 9.07031C7.9093 9.28125 8.07818 9.45 8.27521 9.45C8.47224 9.45 8.64112 9.28125 8.64112 9.07031C8.64112 8.87344 8.47224 8.70469 8.27521 8.70469Z"
				fill={fillCats}
				className="logo-cats"
			/>
			<path
				d="M29.8438 14.0879C29.1953 14.0879 28.6406 13.9648 28.1797 13.7188C27.7188 13.4688 27.3672 13.1074 27.125 12.6348C26.8828 12.1582 26.7617 11.584 26.7617 10.9121V8.57422C26.7617 7.90234 26.8828 7.33008 27.125 6.85742C27.3672 6.38086 27.7188 6.01758 28.1797 5.76758C28.6406 5.51758 29.1953 5.39258 29.8438 5.39258C30.3789 5.39258 30.8574 5.50781 31.2793 5.73828C31.7012 5.96875 32.0488 6.30469 32.3223 6.74609C32.5996 7.18359 32.791 7.71289 32.8965 8.33398H31.2324C31.1699 8.05273 31.0723 7.8125 30.9395 7.61328C30.8105 7.41406 30.6523 7.26172 30.4648 7.15625C30.2812 7.05078 30.0742 6.99805 29.8438 6.99805C29.543 6.99805 29.2871 7.06055 29.0762 7.18555C28.8652 7.30664 28.7031 7.48633 28.5898 7.72461C28.4805 7.95898 28.4258 8.24219 28.4258 8.57422V10.9121C28.4258 11.2441 28.4805 11.5273 28.5898 11.7617C28.7031 11.9961 28.8652 12.1758 29.0762 12.3008C29.2871 12.4219 29.543 12.4824 29.8438 12.4824C30.0781 12.4824 30.2891 12.4316 30.4766 12.3301C30.6641 12.2246 30.8223 12.0723 30.9512 11.873C31.0801 11.6738 31.1738 11.4316 31.2324 11.1465H32.8965C32.7871 11.7676 32.5938 12.2988 32.3164 12.7402C32.043 13.1777 31.6953 13.5117 31.2734 13.7422C30.8555 13.9727 30.3789 14.0879 29.8438 14.0879ZM37.0684 14.0879C36.4512 14.0879 35.9062 13.959 35.4336 13.7012C34.9648 13.4395 34.6016 13.0723 34.3438 12.5996C34.0859 12.123 33.957 11.5723 33.957 10.9473V8.5332C33.957 7.9082 34.0859 7.35938 34.3438 6.88672C34.6016 6.41016 34.9648 6.04297 35.4336 5.78516C35.9062 5.52344 36.4512 5.39258 37.0684 5.39258C37.6855 5.39258 38.2285 5.52344 38.6973 5.78516C39.1699 6.04297 39.5352 6.41016 39.793 6.88672C40.0508 7.35938 40.1797 7.9082 40.1797 8.5332V10.9473C40.1797 11.5723 40.0508 12.123 39.793 12.5996C39.5352 13.0723 39.1699 13.4395 38.6973 13.7012C38.2285 13.959 37.6855 14.0879 37.0684 14.0879ZM37.0684 12.4824C37.3574 12.4824 37.6113 12.4219 37.8301 12.3008C38.0488 12.1758 38.2168 12 38.334 11.7734C38.4551 11.5469 38.5156 11.2852 38.5156 10.9883V8.49219C38.5156 8.19531 38.4551 7.93359 38.334 7.70703C38.2168 7.48047 38.0488 7.30664 37.8301 7.18555C37.6113 7.06055 37.3574 6.99805 37.0684 6.99805C36.7793 6.99805 36.5254 7.06055 36.3066 7.18555C36.0879 7.30664 35.918 7.48047 35.7969 7.70703C35.6797 7.93359 35.6211 8.19531 35.6211 8.49219V10.9883C35.6211 11.2852 35.6797 11.5469 35.7969 11.7734C35.918 12 36.0879 12.1758 36.3066 12.3008C36.5254 12.4219 36.7793 12.4824 37.0684 12.4824ZM42.4941 9.14844H45.2188C45.4102 9.14844 45.5781 9.10547 45.7227 9.01953C45.8711 8.92969 45.9863 8.80469 46.0684 8.64453C46.1504 8.48438 46.1914 8.30078 46.1914 8.09375C46.1914 7.88281 46.1504 7.69727 46.0684 7.53711C45.9902 7.37305 45.877 7.24805 45.7285 7.16211C45.584 7.07227 45.4141 7.02734 45.2188 7.02734H42.4941V5.48047H45.1777C45.709 5.48047 46.1758 5.58984 46.5781 5.80859C46.9844 6.02344 47.2988 6.32812 47.5215 6.72266C47.7441 7.11719 47.8555 7.57422 47.8555 8.09375C47.8555 8.61328 47.7441 9.07031 47.5215 9.46484C47.2988 9.85547 46.9844 10.1582 46.5781 10.373C46.1758 10.5879 45.709 10.6953 45.1777 10.6953H42.4941V9.14844ZM41.7617 5.48047H43.3672V14H41.7617V5.48047ZM52.1211 10.7129V14H50.5156V10.7129L48.0078 5.48047H49.6895L51.3184 9.14844L52.9473 5.48047H54.6289L52.1211 10.7129ZM58.1797 14.0879C57.5898 14.0879 57.0703 13.957 56.6211 13.6953C56.1758 13.4336 55.8301 13.0625 55.584 12.582C55.3379 12.1016 55.2148 11.5449 55.2148 10.9121V8.57422C55.2148 7.94141 55.3379 7.38477 55.584 6.9043C55.8301 6.42383 56.1758 6.05273 56.6211 5.79102C57.0703 5.52539 57.5898 5.39258 58.1797 5.39258C58.668 5.39258 59.1172 5.49805 59.5273 5.70898C59.9375 5.91602 60.2793 6.21094 60.5527 6.59375C60.8301 6.97656 61.0176 7.41992 61.1152 7.92383H59.8906C59.8164 7.6582 59.6914 7.42188 59.5156 7.21484C59.3438 7.00391 59.1406 6.8418 58.9062 6.72852C58.6719 6.61523 58.4297 6.55859 58.1797 6.55859C57.832 6.55859 57.5273 6.64258 57.2656 6.81055C57.0039 6.97852 56.8008 7.21484 56.6562 7.51953C56.5117 7.82031 56.4395 8.17188 56.4395 8.57422V10.9121C56.4395 11.3105 56.5117 11.6621 56.6562 11.9668C56.8008 12.2715 57.0039 12.5078 57.2656 12.6758C57.5273 12.8398 57.832 12.9219 58.1797 12.9219C58.4336 12.9219 58.6758 12.8691 58.9062 12.7637C59.1406 12.6582 59.3438 12.502 59.5156 12.2949C59.6914 12.0879 59.8164 11.8418 59.8906 11.5566H61.1152C61.0176 12.0605 60.8301 12.5039 60.5527 12.8867C60.2754 13.2695 59.9316 13.5664 59.5215 13.7773C59.1113 13.9844 58.6641 14.0879 58.1797 14.0879ZM64.7891 5.48047H65.8086L68.9492 14H67.6602L65.2988 7.12695L62.9375 14H61.6484L64.7891 5.48047ZM63.0957 10.9941H67.5781V12.1309H63.0957V10.9941ZM71.2402 6.17773H72.4355V14H71.2402V6.17773ZM68.832 5.48047H74.8438V6.61719H68.832V5.48047Z"
				fill={fillText}
				fillOpacity={opacityText}
			/>
		</svg>
	);
}