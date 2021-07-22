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
			<div className="flex flex-col justify-around">
				<button
					value="ReparAuto"
					selected="selected"
                    type="button"
                    className="bg-gray-300"
					// onClick={setCarouselUrls("ReparAuto")}
				>
					ReparAuto
				</button>
				<button
					value="Upizz"
                    type="button"
                    className="bg-gray-300"
					//    onClick={setCarouselUrls("Upizz")}
				>
					Upizz
				</button>
				<button
					value="SideProjects"
                    type="button"
                    className="bg-gray-300"
					//    onClick={setCarouselUrls("SideProjects")}
				>
					SideProjects
				</button>
			</div>

			<div className="container text-center flex-row justify-between m-auto">
				<h1>Presentation des projets</h1>
				<CarouselProvider
					naturalSlideWidth={300}
					naturalSlideHeight={120}
					totalSlides={4}
					isPlaying={true}
					lockOnWindowScroll={true}
					infinite={true}
				>
					<div>
						<Slider>
							<Slide index={0}>
								<div>
									<Image alt="reparHome" src={AutoReparHome}></Image>
								</div>
							</Slide>
							<Slide index={1}>
								<div>
									<Image
										alt="reparActivities"
										src={AutoReparActivities}
									></Image>
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
								<div className="rounded-full">
									<Image alt="reparNotices" src={AutoReparNotices}></Image>
								</div>
							</Slide>
						</Slider>
					</div>
					<div className="flex justify-around">
						<ButtonBack className="bg-gray-300">Back</ButtonBack>
						<ButtonNext className="bg-gray-300">Next</ButtonNext>
					</div>
                </CarouselProvider>
                <div className="bg-gray-300">
                <h1>Description du projet</h1>
				<p>
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
					Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
					Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
					Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    </div>
			</div>
		</>
	);
}
