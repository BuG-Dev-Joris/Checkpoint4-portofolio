import React, { useState } from "react";
import AutoReparHome from "../images/repar/ReparHome.jpg";
import AutoReparActivities from "../images/repar/CapRepar.JPG";
import AutoReparAppointments from "../images/repar/ReparAppointments.jpg";
import AutoReparNotices from "../images/repar/ReparNotices.jpg";
import {
	CarouselProvider,
	Slider,
	Slide,
	Image,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Carousel() {
	const [carouselUrls, setCarouselUrls] = useState("reparAuto");

	function carouselRouter() {}

	const urls = {
		reparAuto: {
			AutoReparHomeUrl: { AutoReparHome },
			AutoReparActivitiesUrl: { AutoReparActivities },
			AutoReparAppointmentsUrl: { AutoReparAppointments },
			AutoReparNoticesUrl: { AutoReparNotices },
		},
		upizz: {
			upizzHomeUrl: "",
			upizzHomeAlt: "upizzHome",
			upizzCustomUrl: "",
			upizzCustomAlt: "upizzCustom",
			upizzPredefUrl: "",
			upizzPredefAlt: "upizzPredef",
			upizzContactUrl: "",
			upizzContactAlt: "upizzContact",
		},
		sideProjects: {
			hackHomeUrl: "",
			hackHomeAlt: "hackHome",
			hackGameUrl: "",
			hackGameAlt: "hackGame",
			towerHomeUrl: "",
			towerHomeAlt: "towerHome",
			towerGameUrl: "",
			towerGameAlt: "towerGame",
		},
	};

	/*
    function urlRouter() {
        if (reparAuto) {
            return {
                urls.reparAuto
            }
        } else if (upizz) {
            return {
                urls.upizz
            }
        } else if (sideProjects) {
            return {
                urls.sideProject
            }
        }
    }
*/

	return (
		<>
			<div className="flex-col">
				<button
					value="ReparAuto"
					selected="selected"
					// onClick={setCarouselUrls("ReparAuto")}
				>
					ReparAuto
				</button>
				<button
					value="Upizz"
					//    onClick={setCarouselUrls("Upizz")}
				>
					Upizz
				</button>
				<button
					value="SideProjects"
					//    onClick={setCarouselUrls("SideProjects")}
				>
					SideProjects
				</button>
			</div>

			<div className="container">
				<CarouselProvider
					naturalSlideWidth={300}
					naturalSlideHeight={120}
					totalSlides={4}
					isPlaying={true}
					lockOnWindowScroll={true}
					infinite={true}
				>
					<Slider>
						<Slide index={0}>
							<div>
								<Image
									alt="reparHome"
									src={urls.reparAuto.AutoReparHomeUrl}
								></Image>
							</div>
						</Slide>
						<Slide index={1}>
							<div>
								<Image alt="reparActivities" src={AutoReparActivities}></Image>
							</div>
						</Slide>
						<Slide index={2}>
							<div>
								<Image
									alt="reparAppointments"
									src={AutoReparAppointments}
								></Image>
							</div>
						</Slide>
						<Slide index={3}>
							<div>
								<Image alt="reparNotices" src={AutoReparNotices}></Image>
							</div>
						</Slide>
					</Slider>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</CarouselProvider>
			</div>
		</>
	);
}
