import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import "./BlogCity.css";

const placeoptions = [
  { value: "mumbai", label: "Mumbai" },
  { value: "nashik", label: "Nashik" },
  { value: "pune", label: "Pune" },
];

function Nashik() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="cityblogContainer">
      <Container fluid className="blogSearch">
        <div>
          <Select
            className="placeserchbar"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeoptions}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            placeholder={<BiSearch />}
          />
        </div>

        <div>
          <h5>Popular Search</h5>
        </div>

        <div>
          <Row>
            <Col md={4} className="blogserchimg">
              <img src="Nashik 1.png" alt="" />
              <p>Best Places to visit in Nashik</p>
            </Col>

            <Col md={4} className="blogserchimg">
              <img src="Nashik 3.png" alt="" />
              <p>Best Places to visit in Pune</p>
            </Col>

            <Col md={4} className="blogserchimg">
              <img src="Nashik 2.png" alt="" />
              <p>Best Places to visit in Aurangabad</p>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="blogcitydata">
        <div className="blogcitydata1">
          <h3>Best Places to Visit in Aurangabad</h3>
          <img src="blog image2.jpeg" alt="" />
        </div>

        <div className="blogcitydata2">
          <div>
            <h5>1) Ajanta Caves</h5>
            <Row className="cityblogrow">
              <Col>
                <img src="ajanta.jpg" alt="" />
              </Col>
              <Col>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  The caves at Ajanta are excavated out of a vertical cliff
                  above the left bank of the river Waghora in the hills of
                  Ajanta. They are thirty in number, including the unfinished
                  ones, of which five (caves 9, 10, 19, 26 and 29) are
                  chaityagrihas (sanctuary) and the rest, sangharamas or viharas
                  (monastery). The caves are connected with the river by
                  rock-cut staircases. The excavation activity was carried out
                  in two different phases separated by an interval of about four
                  centuries. The first phase coincides with the rule of the
                  Satavahana dynasty from about the 2nd century BCE to the 1st
                  century BCE, while the second phase corresponds to the Basim
                  branch of the Vakataka dynasty with their Asmaka and Rishika
                  feudatories in the 5th to 6th centuries CE.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <h5>2) Grishneshwar Temples</h5>
            <Row className="cityblogrow">
              <Col>
                <img src="grish.jpg" alt="" />
              </Col>
              <Col>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  The Grishneswar temple is an illustration of maratha temple
                  architectural style and structure. The temple, built of red
                  rocks, is composed of a five-tier shikara. The temple was
                  re-constructed by Maloji Bhosale of Verul, (grandfather of
                  Chhatrapati Shivaji Maharaj) in the 16th century and later
                  again by queen Ahilyabai Holkar in the 18th century. She is
                  credited with rebuilding some of major Hindu temples such as
                  the Kashi Vishvanath temple in Varanasi, a Vishnu temple in
                  Gaya, and a much larger Shiva Jyotirlinga temple in Somnath
                  Temple. This 240 ft x 185 ft temple is the smallest
                  Jyotirlinga temple in India. Halfway up the temple,
                  Dashavataras of Vishnu are carved in red stone.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <h5>3) Bibi ka Maqbara</h5>
            <Row className="cityblogrow">
              <Col>
                <img src="daulatabad.jpg" alt="" />
              </Col>
              <Col>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  Bibi Ka Maqbara is believed to have been built between 1668
                  and 1669 C.E. According to the "Tarikh Namah" of Ghulam
                  Mustafa, the cost of construction of the mausoleum was Rs.
                  668,203-7 (rupees six lakh, sixty-eight thousand, two hundred
                  three and seven annas) Aurangzeb allocated only Rs. 700,000
                  for its construction. An inscription found on the main
                  entrance door mentions that this mausoleum was designed and
                  erected by Ata-ullah, an architect and Hanspat Rai, an
                  engineer respectively. The marble for this mausoleum was
                  brought from mines near Jaipur. According to Tavernier, around
                  three hundred carts laden with marble, drawn by at least 12
                  oxen, were seen by him during his journey from Surat to
                  Golconda.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Nashik;
