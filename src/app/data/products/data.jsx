import Pro01 from "media/products/Pro01.webp";
import { Download, ListIcon, PdfIcon } from "@/src/app/app-constants";
// Category 01  -- Product 01
import C1Pro1_1 from "media/products/cat1/pro1/NRG_DS-04v3_Front.webp";
import C1Pro1_2 from "media/products/cat1/pro1/NRG_DS-04v3_Back.webp";
import C1Pro1_3 from "media/products/cat1/pro1/NRG_DS-04_Mobile_Kit.webp";

// Category 01  -- Product 05

// Category 02  -- Product 02
import InterImage from "media/products/cat1/pro2/interImage.webp";

// Category 02  -- Product 03
import KeyImage from "media/products/cat2/pro3/keyImage.webp";
import Image from "next/image";

export const tabList = [
  { id: "cat1", label: "Deployable Communications Solutions" },
  { id: "cat2", label: "Rugged Enhancements" },
  { id: "cat3", label: "Telemetry Products" },
];
export const productsData = {
  cat1: [
    {
      id: 1,
      slug: "network-radio-gateway-ds-04v3",
      name: "Network Radio Gateway NRG DS-04v3",
      img: Pro01.src,
      txt: "Radio-over-IP (RoIP) gateway supports multiple radio types and is rugged and field-deployable, enabling seamless interoperability between tactical, legacy, and IP networks in any environment.",
    },
    {
      id: 2,
      slug: "network-radio-gateway-nrg-deployable-systems",
      name: "Network Radio Gateway NRG Rack Mount-XX",
      img: Pro01.src,
      txt: "NRG® is a solution that provides Voice over IP(VoIP)/Radio over IP(RoIP) conferencing, converging voice, MIL-STD 188/184 data, HPW data, and remote radio configuration/control capability into a single standalone network appliance. ",
    },
    {
      id: 3,
      slug: "outsource-the-workload-owl",
      name: "Outsource the Workload OWL",
      img: Pro01.src,
      txt: "Provides automated management of communications and data workloads with intelligent processing, allowing operators to focus on mission-critical tasks instead of system management.",
    },
    {
      id: 4,
      slug: "our-featured-network-radio-gateway",
      name: "PacStar 466 Featuring Parraid’s Network Radio Gateway NRG",
      img: Pro01.src,
      txt: "PacStar rugged server module integrates Parraid NRG functionality, combining best-in-class tactical server hardware with Parraid’s advanced interoperability technology.",
    },
    {
      id: 5,
      slug: "radio-data-adapter-rda-cables",
      name: "Radio Adapter Cable RDA",
      img: Pro01.src,
      txt: "​​​​​​​​The Parraid multi-function RDA cable is designed to simplify radio operations by allowing a computer to perform up to six different radio interface tasks using a single USB connection.",
    },
  ],
  cat2: [
    {
      id: 1,
      slug: "rugged-usb-hub-2-0",
      name: "Rugged USB Hub RUH 2.0",
      img: Pro01.src,
      txt: "The Parraid Rugged USB Hub 2.0 is the first USB hub designed to meet a full range of environmental requirements for mobile and deployed systems.",
    },
    {
      id: 2,
      slug: "rugged-usb-hub-3-0",
      name: "Rugged USB Hub RUH 3.0",
      img: Pro01.src,
      txt: "The Parraid Rugged USB Hub 3.0 is the toughest four port hub on the market. Designed from the ground-up for the most extreme operating environments.",
    },
    {
      id: 3,
      slug: "rugged-usb-repeater",
      name: "Rugged USB Repeater",
      img: Pro01.src,
      txt: "The Parraid Rugged USB Repeater™ (RUR) is a device that allows USB connections to be reliably extended.",
    },
  ],
  cat3: [
    {
      id: 1,
      slug: "best-data-engine-bde",
      name: "Best Data Engine BDE",
      img: Pro01.src,
      txt: "Enables real-time stream comparison, selection, and error correction to ensure mission-critical users always receive the best possible version of telemetry data.",
    },
    {
      id: 2,
      slug: "best-source-reproducer-bsr-100",
      name: "Best Source Reproducer BSR-100",
      img: Pro01.src,
      txt: "Intelligent data selection replays the best quality data stream for post-test analysis, reducing operator workload and ensuring optimal data fidelity.",
    },
    {
      id: 3,
      slug: "edge2-telemetry-reciver",
      name: "Edge2 Telemetry Network Appliance",
      img: Pro01.src,
      txt: "The Edge² is engineered to provide network telemetry processing at the edge in a portable or rack-mountable 2 channel unit.",
    },
    {
      id: 4,
      slug: "g3-tmoip-data-processing",
      name: "G3",
      img: Pro01.src,
      txt: "The G3 Recorder-Processing system represents the next generation of telemetry data recording and processing platforms.",
    },
    {
      id: 5,
      slug: "imux–g2e-and-g2eh",
      name: "IMUX G2e and G2eH",
      img: Pro01.src,
      txt: "Multi-channel telemetry recorder; supports IRIG-106 Chapter 10; portable/rack-mount options.",
    },
    {
      id: 7,
      slug: "imux-re-con",
      name: "IMUX RE-CON",
      img: Pro01.src,
      txt: "The IMUX RE/CON network recorder is a telemetry specific ground network recorder ideally suited for ranges moving to IP telemetry.",
    },
    {
      id: 8,
      slug: "omega-data-environment-ode",
      name: "OMEGA Data Environment ODE",
      img: Pro01.src,
      txt: "ODE enables data analysts and consumers to rapidly and securely explore and exploit large data sets.",
    },
    {
      id: 9,
      slug: "omega-next-real-time-data-processing-software",
      name: "OMEGA NExT",
      img: Pro01.src,
      txt: "OMEGA-NExT offers an unmatched blend of power, ease of use, flexibility, and affordability.",
    },
    {
      id: 10,
      slug: "rx2-receiver",
      name: "Rx2 Receiver",
      img: Pro01.src,
      txt: "Multi-band telemetry receiver with built-in demodulation and bit-synchronization delivers high performance, flexibility, and seamless integration into Parraid’s data ecosystem.",
    },
    {
      id: 11,
      slug: "series-5000-data-processors",
      name: "S-5000e Data Processor",
      img: Pro01.src,
      txt: "The Series-5000 is real-time data processing platform available in portable and rack-mount configurations: 2U and 4U, ruggedized and industrial.",
    },
  ],
};

export const ProdDetails = [
  {
    cat: "cat1",
    slug: "network-radio-gateway-ds-04v3",
    name: "Network Radio Gateway NRG DS-04v3",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          Introducing the NRG DS-04v3—the latest powerhouse in Parraid’s
          groundbreaking Radio over IP (RoIP) solutions. This all-in-one,
          standalone network appliance revolutionizes communication by
          seamlessly integrating voice conferencing, HPW data, and remote radio
          configuration and control into a single, robust platform. Our latest
          Network Radio Gateway software NRG5 and any hardware offerings using
          the new Compact Radio Interface Board (CRIB) or derivative products
          based on it, and the Legacy Data Adapter (LDA) are Non-ITAR export
          classification ECCN 5A991 and 5D991.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>Powered by NRG5 for Maximum Interoperability</h6>
        <p>
          Harnessing the cutting-edge NRG5 technology, the DS-04v3 employs a
          decentralized mesh network of gateways and clients. This modern
          infrastructure ensures flawless voice and data support over legacy
          U.S. Military Combat Net Radios (CNR), Joint Tactical Radio Systems
          (JTRS), and commercial Land Mobile Radio (LMR) Systems—delivering
          unparalleled interoperability across diverse communication systems.
        </p>
        <h6>Flexible Conferencing with Infinite Scalability</h6>
        <p>
          Experience unmatched communication flexibility with NRG’s versatile
          conferencing server. Capable of simultaneously supporting multiple
          audio sources—including analog, digital, cellular phones, and both
          military and civilian radios—the system allows for seamless
          communication in either conference or channel mode. Its advanced radio
          bridging connects like and dissimilar radio devices effortlessly.
        </p>
        <h6>Fault-Tolerant and Efficient Multiprocessing</h6>
        <p>
          Boost your operational efficiency with the DS-04v3’s enhanced
          multiprocessing capabilities. By enabling processors to share
          workloads across all connected appliances, the system ensures fault
          tolerance and offers infinite scalability. This means you can expand
          your communication network without compromising performance or
          reliability.
        </p>
        <h6>Elevate Your Mission-Critical Communications Today</h6>
        <p>
          Step into the future of seamless, scalable, and secure communications
          with the NRG DS-04v3. It’s not just an upgrade—it’s a transformation
          of your entire communication infrastructure.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            DS-04v3 model is compact, with a rugged fanless enclosure
          </li>
          <li>
            <ListIcon />
            Connects two-four radio systems and up to 50 endpoints
          </li>
          <li>
            <ListIcon />
            Adapts from small command posts to full enterprise integration
          </li>
          <li>
            <ListIcon />
            Removable SSD
          </li>
          <li>
            <ListIcon />
            Trusted Platform Module 2.0 (TPM)
          </li>
          <li>
            <ListIcon />
            Front panel system and status tri-color LEDs.
          </li>
          <li>
            <ListIcon />
            Windows 10/11 Support
          </li>
          <li>
            <ListIcon />
            Leverages Rally Tactical Systems’ Engage platform and Rallypoint
            software
          </li>
          <li>
            <ListIcon />
            Scalable and Decentralized: Adapts from small command posts to full
            enterprise integration.
          </li>
          <li>
            <ListIcon />
            Interoperability: Compatible with a wide range of unified
            communications protocols and systems, including Motorola WAVE,
            TOCNET, ICE, Cisco Call Manager, AT&T FirstNet, Access Net, LTE, and
            more.
          </li>
          <li>
            <ListIcon />
            Enhanced Radio Support: Offers remote data and radio control for
            both software-defined radios and legacy systems, including LMRs.
          </li>
          <li>
            <ListIcon />
            Tactical and Standalone Operations: Functions in standalone tactical
            configurations or integrates multiple radio circuits across IP
            subnetworks.
          </li>
          <li>
            <ListIcon />
            Future-Ready Transport: Supports a range of transport methods
            including 5G, Fiber, Mesh Radio, Software-Defined Radio, Starshield,
            and tactical LANs.
          </li>
          <li>
            <ListIcon />
            Cost-Effective: Enables shared use of expensive radios across
            multiple users, reducing overall costs.
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat1",
    slug: "network-radio-gateway-nrg-deployable-systems",
    name: "Network Radio Gateway Rack Mount Systems",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Capabilities</h5>
        <p>
          <strong>Versatile Graphical User Interface (TWO VERSIONS):</strong>
        </p>
        <ul>
          <li>
            <ListIcon />
            FULL Version: Detailed version for administrators
          </li>
          <li>
            <ListIcon />
            LITE Version: Scaled down version of NRG that focuses on radio
            voice, intercom, and instant messaging communications
          </li>
          <li>
            <ListIcon />
            Remote control, operation, and programming of supported radios{" "}
          </li>
          <li>
            <ListIcon />
            Text chat, text paging, and logging
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          NRG® is a solution that provides Voice over IP(VoIP)/Radio over
          IP(RoIP) conferencing, converging voice, MIL-STD 188/184 data, HPW
          data, and remote radio configuration/control capability into a single
          standalone network appliance. The system offers communications through
          such industry-standard protocols as H.323, SIP, and Multicast. NRG
          equipment is interoperable with WAVE, TOCNET, IPICS, Cisco Call
          Manager, Access Net, SIP phones, generic IP phones, and works with
          PDAs/cellular phones.
        </p>
        <p>
          NRG allows Communications Operators for maneuver units and Special
          Operations Forces (SOF) to patch voice from phones, networked clients,
          and radios into a single audio channel or conference. This allows
          maximum communications flexibility and improved coordination for field
          units. In addition, Operators can use a computer network to remotely
          configure radios for different settings (frequency, modulation, nets,
          etc.) without changing cables or other radio physical access.
          Operators also can share expensive radio assets, reducing the number
          and cost of communications installations. NRG has been designed to
          provide all of these functions in a compact network appliance that is
          easy to configure and maintain.
        </p>
        <p>
          The NRG Rack Mount Systems support up to 400 endpoints (any
          combination of users and radios) and any number of radios in several
          configurations. The NRG RM-12 supports up to 12 connected radios while
          the RM-08 and RM-04 support 8 and 4 radios respectively. All
          configurations are made to fit into standard 19” equipment racks and
          all are 1U high. The NRG Rack Mount Systems are designed to meet the
          most challenging radio networking situations.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <p>
          <strong>Scalable–</strong> Configuration can include any combination
          of 4, 8, and 12 port systems to scale to the number of radios required
          in the system.
        </p>
        <p>
          <strong>Expandable–</strong> Choice of 4, 8, and 12 ports reduces
          unnecessary hardware costs for unneeded ports (4 and 8 port units can
          be upgraded).
        </p>
        <p>
          <strong>Rack Mount–</strong> Mounts in a standard depth 19” rack.
        </p>
      </>
    ),
    tab3: (
      <>
        <h4>Capabilities</h4>
        <h6>Versatile Graphical User Interface (TWO VERSIONS):</h6>
        <ul>
          <li>
            <ListIcon />
            FULL Version: Detailed version for administrators
          </li>
          <li>
            <ListIcon />
            LITE Version: Scaled down version of NRG that focuses on radio
            voice, intercom, and instant messaging communications
          </li>
          <li>
            <ListIcon />
            Remote control, operation, and programming of supported radios
          </li>
          <li>
            <ListIcon />
            Text chat, text paging, and logging
          </li>
        </ul>
        <h6>Command and Control (C2) Monitoring:</h6>
        <ul>
          <li>
            <ListIcon />
            Single or multiple radio circuits across IP networks
          </li>
          <li>
            <ListIcon />
            Supports HPW, MIL-STD 188-184 (PDA-184)data technology, ViaSat
            V-mail, ViaSat ACP/IP (E-mail gateway service)
          </li>
          <li>
            <ListIcon />
            This system incorporates elements of the software developed by The
            MITRE Corporation on behalf of the U​​.S. Government.​​
          </li>
        </ul>
        <h6>Characteristics:</h6>
        <ul>
          <li>
            <ListIcon />
            Networking support for up to 12 radios
          </li>
          <li>
            <ListIcon />
            Supports up to 400 endpoints (any combination of users and radios)
          </li>
          <li>
            <ListIcon />
            Easily removable Solid-State Drive (SSD)
          </li>
          <li>
            <ListIcon />
            Combined radio, voice, and data cables to minimize cabling, size,
            weight, and cost
          </li>
          <li>
            <ListIcon />
            Fits in standard 1U 19” rack space
          </li>
          <li>
            <ListIcon />
            AC or DC power operation and low power consumption
          </li>
          <li>
            <ListIcon />
            Robust, self monitoring, self-restoring network uses failover
            priority (automatic recovery)
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat1/pro2/EoIP_Software_Version_5_-NRG5-_Product_Flyer_Rev_02.pdf"
              download="Rugged-Enhancements-RDA-Cables.pdf"
            >
              <PdfIcon /> NRG 5 Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
    tab5: (
      <>
        <h4>Features</h4>
        <h6>Standard Interface</h6>
        <p>Turns dissimilar radios into more uniform networked resources</p>
        <h6>Intercom/Conference</h6>
        <p>Allows cross communications between voice sources</p>
        <h6>Legacy Radio Support</h6>
        <p>
          Bridges legacy and proprietary radio data to more useable Internet
          Protocol (IP)
        </p>
        <h6>Scales up</h6>
        <p>Multiple units can be combined to scale for larger installations</p>
        <h6>Robust</h6>
        <p>Fault tolerant and has auto-recovery capability</p>
        <h6>Saves time</h6>
        <p>Easy to configure and maintain</p>
        <h6>Cost-effective</h6>
        <p>Allows expensive radios to be shared by many users</p>
        <p>
          Scalable– Configuration can include any combination of 4, 8, and 12
          port systems to scale to the number of radios required in the system.
        </p>
        <p>
          Expandable– Choice of 4, 8, and 12 ports reduces unnecessary hardware
          costs for unneeded ports (4 and 8 port units can be upgraded).
        </p>
        <p>Rack Mount– Mounts in a standard depth 19” rack.</p>
      </>
    ),
    tab6: (
      <>
        <h4>Interoperability</h4>
        <p>
          NRG is the connecting hub for all protocols and it enables seamless
          mission communications across multiple VoIP/RoIP systems.
        </p>
        <div className="ProductimgBox">
          <Image src={InterImage.src} alt="Interoperability" fill />
        </div>
      </>
    ),
  },
  {
    cat: "cat1",
    slug: "outsource-the-workload-owl",
    name: "Outsource the Workload (OWL)",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          Outsource the Workload (OWL) is a compact, intelligent device designed
          for complete battlefield awareness. This pouch-sized hub replaces
          multiple separate technologies, simplifying a soldier’s equipment and
          workload. The OWL provides comprehensive data translation and protocol
          conversion, secure connectivity, and radio control with bridging. OWL
          offers edge computing and mass storage, freeing users to focus on
          their mission, while allowing for swift seamless equipment integration
          and future technology expansion.
        </p>
        <p>
          The operator-centric OWL is the newest addition to Parraid’s industry
          leading Network Radio Gateway ecosystem. All powered by NRG5 software,
          the entire Network Radio Gateway product line is platform agnostic in
          wearable, deployable, mobile (air/land/sea), and fixed infrastructure
          form factors.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          <strong>Rugged Computing:</strong>
          Edge-tough compute for austere environments; runs TAK server, The
          Network Radio Gateway (NRG) running NRG software version 5 (NRG5),
          datalink gateways (SNC TRAX®/Stauder JECL®), and future expansion
          capabilities (sensor fusion, analytics, AI/ML, post-quantum security).
        </p>
        <p>
          <strong>Secure Linux and Storage:</strong>
          The embedded secure Linux system provides 1TB of storage, which is
          ample space for high-resolution map datasets and other data for
          offline use when high-bandwidth connections are unavailable.
        </p>
        <p>
          <strong>Network Radio Gateway (NRG®):</strong>
          Part of Parraid’s RoIP ecosystem—serverless voice/data bridging,
          remote radio control, transcoding, QoS, and x.509 certificate-based
          federation.
        </p>
        <p>
          <strong>Unified Connectivity:</strong>
          OWL seamlessly interfaces with the Integrated Tactical Network (ITN)
          while simultaneously bridging analog, digital, and IP
          radios—VHF/UHF/HF/MANET/MIMO—keeping teams synced with multiple
          connectivity paths (Nett Warrior, USB, Ethernet, WI-FI, cellular,
          SATCOM).
        </p>
        <p>
          <strong>User-Worn Powerhouse:</strong>
          Smart, user-worn power hub that feeds body-worn gear and keeps the
          End-User Device (EUD) charged and mission-ready.
        </p>
        <p>
          <strong>Outsource the Workload:</strong>
          Operator-first, low-SWaP device that provides legacy hardware
          integration and edge processing. Reduces cognitive load on the
          operator by handling compute and storage, so the phone or other EUD
          stays clean and serves as an intuitive display only.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Supported Radios:
            <div>
              <p>Military Tactical, MANET, LOS, BLOS, etc</p>
              <p>Civilian Agency</p>
              <p>Coalition</p>
              <p>Commercial / Public Service</p>
              <p>Special Mission as Requested</p>
            </div>
          </li>
          <li>
            <ListIcon />
            Remote Radio Control
          </li>
          <li>
            <ListIcon />
            Secure Data Transmission for LOS and BLOS
          </li>
          <li>
            <ListIcon />
            Local/Enterprise TAK Connectivity
          </li>
          <li>
            <ListIcon />
            Nett Warrior Compatible
          </li>
          <li>
            <ListIcon />
            Ground/Air/Maritime Mission Integration Options
          </li>
          <li>
            <ListIcon />
            Power: 9-36 VDC
          </li>
          <li>
            <ListIcon />
            VMF Transmission
            <div>
              <p>Free Text</p>
              <p>9 Line</p>
              <p>PLI</p>
              <p>Target Designation</p>
              <p>Aircraft on Station Report</p>
            </div>
          </li>
          <li>
            <ListIcon />
            Link 16
            <div>
              <p>Free Text (J28.2)</p>
              <p>Initial Entry (J0.0)</p>
              <p>PPLI (J2.0)</p>
              <p>Air PPLI (J2.2)</p>
              <p>Reference Point (J3.0)</p>
              <p>Target Sorting Message (12.6)</p>
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat1",
    slug: "our-featured-network-radio-gateway",
    name: "PacStar 466 Featuring Parraid’s Network Radio Gateway NRG",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          The PacStar 466 incorporates Parraid’s NRG, an all-in-one, standalone
          network appliance that revolutionizes communications by seamlessly
          integrating voice conferencing, HPW data, and remote radio
          configuration and control into a single, robust platform. Our latest
          Network Radio Gateway software NRG5 and the new Compact Radio
          Interface Board (CRIB) are Non-ITAR export classification ECCN 5A991
          and 5D991.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>Powered by NRG5 software for Maximum Interoperability</h6>
        <p>
          Harnessing the cutting-edge NRG5 technology, the PacStar 466 employs a
          decentralized mesh network of gateways and clients. This modern
          infrastructure ensures flawless voice and data support over legacy
          U.S. Military Combat Net Radios (CNR), Joint Tactical Radio Systems
          (JTRS), and commercial Land Mobile Radio (LMR) Systems delivering
          unparalleled interoperability across diverse communication.
        </p>
        <h6>Flexible Conferencing with Infinite Scalability </h6>
        <p>
          Experience unmatched communication flexibility through the PacStar 466
          with NRG5’s versatile conferencing server. Capable of simultaneously
          supporting multiple audio sources- including analog, digital, cellular
          phones, and both military and civilian radios. The system allows for
          seamless communication in either conference or channel mode. Its
          advanced radio bridging connects like and dissimilar radio devices
          effortlessly.
        </p>
        <h6>NRG5 Fault-Tolerant and Efficient Multiprocessing </h6>
        <p>
          Boost your operational efficiency with the NRG5-enhanced
          multiprocessing capabilities. NRG5 software can share workloads across
          all connected appliances ensuring a robust fault tolerant system and
          offering infinite scalability. This means you can expand your
          communications network without compromising performance or
          reliability.
        </p>
        <h6>Elevate Your Mission-Critical Communications Today</h6>
        <p>
          Step into the future of seamless, scalable, and secure communications
          with the PacStar 466. It’s not just an upgrade-it’s a transformation
          of your entire communications infrastructure.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Based on the proven technology from our Deployable System DS-04v3
            with four (4) radio interface ports.
          </li>
          <li>
            <ListIcon />
            Compact design with a rugged fanless enclosure - small enough for
            mobile, manpack, or aircraft use.
          </li>
          <li>
            <ListIcon />
            Expand up to 12 radio systems by interconnecting multiple PacStar
            466 modules.
          </li>
          <li>
            <ListIcon />
            Adapts from small command posts to full enterprise integration.
          </li>
          <li>
            <ListIcon />
            Easy to use and deploy - turns dissimilar radios into more uniform
            networked resource.
          </li>
          <li>
            <ListIcon />
            Front panel indicators for system and status tri-color LEDs.
          </li>
          <li>
            <ListIcon />
            Versatile Graphical User Interface - Windows 10/11 Support.
          </li>
          <li>
            <ListIcon />
            Enhanced radio support - remote data and radio control.
          </li>
          <li>
            <ListIcon />
            Command and Control Monitoring - full recording and playback of all
            radio voice and conference audio.
          </li>
          <li>
            <ListIcon />
            Scalable and Decentralized: Adapts from tactical-standalone command
            posts to full enterprise integration across IP subnetworks.
          </li>
          <li>
            <ListIcon />
            Interoperability: Compatible with a wide range of unified
            communications protocols and systems, including Motorola WAVE,
            TOCNET, ICE, Cisco Call Manager, AT&T FirstNet, Access Net, LTE, and
            more.
          </li>
          <li>
            <ListIcon />
            Enhanced Radio Support: Offers remote data and radio control for
            both software-defined radios and legacy systems, including LMRs.
          </li>
          <li>
            <ListIcon />
            Can support Remote Radio Control, PPP, Sync, Async, L3Harris CPA,
            and HPW WMT.
          </li>
          <li>
            <ListIcon />
            Future-Ready Transport: Supports a range of transport methods
            including 5G, Fiber, Mesh Radio, Software-Defined Radio, Starshield,
            and tactical LANs.
          </li>
          <li>
            <ListIcon />
            Cost-Effective: Enables shared use of expensive radios across
            multiple users, reducing overall costs.
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat1",
    slug: "radio-data-adapter-rda-cables",
    name: "Radio Data Adapter (RDA) Cables",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The Parraid multi-function RDA cable is designed to simplify radio
          operations by allowing a computer to perform up to six different radio
          interface tasks using a single USB connection.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          ​​​​​​​​The Parraid multi-function RDA cable is designed to simplify
          radio operations by allowing a computer to perform up to six different
          radio interface tasks using a single USB connection.
        </p>
        <p>
          The RDA is powered from the personal computer’s USB port and presents
          itself as a multi-port serial adapter. This simultaneously enables
          three data ports and up to six operational modes: asynchronous data,
          synchronous data, asynchronous remote, Ethernet over USB, PDA-184 and
          High Performance Waveform / Point-to-Point Protocol (HPW/PPP). The RDA
          cable solves the problem of physically having to change cables to
          perform different data functions, decreases equipment weight,
          eliminates the need to purchase multiple OEM cables and has been
          combat proven to work in even the harshest operating environments.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Replaces several single function cables
          </li>
          <li>
            <ListIcon />
            Weighs less than 1lb with a streamlined design
          </li>
          <li>
            <ListIcon />
            Supports a broad range of radios
          </li>
          <li>
            <ListIcon />
            Connects to a PC via latching USB connector
          </li>
          <li>
            <ListIcon />
            Provides significant cost benefit
          </li>
          <li>
            <ListIcon />
            Reduces battery consumption
          </li>
        </ul>
      </>
    ),

    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat1/pro5Rugged-Enhancements-RDACables_Product_Flyer-Rev-0.pdf"
              download="Rugged Enhancements Radio Data Adapter (RDA) Cables Product Flyer"
            >
              <PdfIcon /> Rugged Enhancements Radio Data Adapter (RDA) Cables
              Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat2",
    slug: "rugged-usb-hub-2-0",
    name: "Rugged USB 2.0 Hub",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The Parraid Rugged USB Hub (RUH) 2.0 is the first USB hub designed to
          meet a full range of environmental requirements for mobile and
          deployed systems.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>Dimensions:</h6>
        <ul>
          <li>
            <ListIcon />
            1.53H x 6.34W x 3D inches
          </li>
        </ul>
        <h6>Construction:</h6>
        <ul>
          <li>
            <ListIcon />
            Aluminum enclosure
          </li>
        </ul>
        <h6>Finish:</h6>
        <ul>
          <li>
            <ListIcon />
            Gold and black powder coated surface
          </li>
        </ul>
        <h6>Operating Temperature:</h6>
        <ul>
          <li>
            <ListIcon />
            -55°C to 49°C (-67°F to 120°F)
          </li>
        </ul>
        <h6>Storage Temperature:</h6>
        <ul>
          <li>
            <ListIcon />
            -58°C to 85°C (-72°F to 185°F)
          </li>
        </ul>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Environmentally sealed USB, serial, and power ports
          </li>
          <li>
            <ListIcon />4 powered high speed USB 2.0 ports
            <div>
              <p>Up to 480 Mbps</p>
              <p>Up to 500 mA</p>
            </div>
          </li>
          <li>
            <ListIcon />2 x RS232 serial ports for legacy and serial devices
            <div>
              <p>Point-to-point communication</p>
              <p>50ft.</p>
              <p>20Kb/s</p>
            </div>
          </li>
          <li>
            <ListIcon />1 x RS422 serial port for greater distances and higher
            Baud rates than RS232
            <div>
              <p>Point-to-multipoint communication</p>
              <p>Up to 10 Receivers</p>
              <p>4000ft.</p>
              <p>100Kb/s</p>
            </div>
          </li>
          <li>
            <ListIcon />
            9-36 VDC power input
          </li>
          <li>
            <ListIcon />
            Less than 2 lbs. total weight
          </li>
        </ul>
      </>
    ),
    tab5: (
      <>
        <h4>Features</h4>
        <h6>Dimensions:</h6>
        <ul>
          <li>
            <ListIcon />
            1.53H x 6.34W x 3D inches
          </li>
        </ul>
        <h6>Construction:</h6>
        <ul>
          <li>
            <ListIcon />
            Aluminum enclosure
          </li>
        </ul>
        <h6>Finish:</h6>
        <ul>
          <li>
            <ListIcon />
            Gold and black powder coated surface
          </li>
        </ul>
        <h6>Operating Temperature:</h6>
        <ul>
          <li>
            <ListIcon />
            -55°C to 49°C (-67°F to 120°F)
          </li>
        </ul>
        <h6>Storage Temperature</h6>
        <ul>
          <li>
            <ListIcon />
            -58°C to 85°C (-72°F to 185°F)
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat2/pro1/Rugged-Enhancements-RUH-Combined_Product-Flyer-Rev-00.pdf"
              download="RUH product flyer"
            >
              <PdfIcon /> RUH product flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat2",
    slug: "rugged-usb-hub-3-0",
    name: "Rugged USB 3.0 Hub",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          Military-Grade, Environmentally Sealed, Electromagnetically Shielded,
          Mountable Designed from the ground-up for the most extreme operating
          environments encountered by modern advanced mobile IT systems, the
          Rugged USB Hub (RUH) 3.0 is certified to MIL-STD-810 for temperature,
          vibration, and pyroshock; MIL-STD-461 for emissions and
          susceptibility.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The Parraid Rugged USB Hub 3.0 is the toughest four port hub on the
          market. Designed from the ground-up for the most extreme operating
          environments encountered by modern advanced mobile IT systems, the
          Rugged USB Hub 3.0 is certified to MIL-STD-810 for temperature,
          vibration, and pyroshock; MIL-STD-461 for emissions and
          susceptibility. The sturdy and dependable RUH 3.0 is the strongest way
          to interconnect your deployable systems and is fast and reliable under
          the harshest conditions.
        </p>
        <p>
          Don’t let your USB hub be the weakest link in your fielded IT
          equipment!
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Slim, durable design
          </li>
          <li>
            <ListIcon />
            Retentive connectors
          </li>
          <li>
            <ListIcon />
            Heavy-duty military connectors prevent accidental disconnection
          </li>
          <li>
            <ListIcon />
            Withstands extreme temperatures
          </li>
          <li>
            <ListIcon />
            Withstands extreme shock
          </li>
          <li>
            <ListIcon />
            Electromagnetically shielded
          </li>
          <li>
            <ListIcon />
            Built-in mount points
          </li>
          <li>
            <ListIcon />
            Port overcurrent protection
          </li>
          <li>
            <ListIcon />
            Four powered SuperSpeed USB 3.0 Ports
            <div>
              <p>High-speed data transfers up to 5Gbps</p>
              <p>Up to 900 mA per downstream port</p>
              <p>Fully backwards compatible with USB predecessors</p>
            </div>
          </li>
          <li>
            <ListIcon />
            Can cascade multiple hubs, enabling many devices
          </li>
          <li>
            <ListIcon />
            Operates with Microsoft Windows, Apple Macintosh OS, Linux, and
            other USB-capable operating systems
          </li>
        </ul>
      </>
    ),
    tab5: (
      <>
        <h4>Features</h4>
        <h6>Specifications:</h6>
        <ul>
          <li>
            <ListIcon />
            Dimensions: 7.52″ x 2.37″ x 1.8″
          </li>
          <li>
            <ListIcon />
            Weight: 1.22 lbs.
          </li>
          <li>
            <ListIcon />
            Finish: Black anodize (MIL-A-8625, Type II)
          </li>
          <li>
            <ListIcon />
            Ports: (4) Downstream USB ports, (1) Upstream USB port, and (1)
            Power
          </li>
          <li>
            <ListIcon />
            Power Cable Connector: ODU S10YAR-P03XJG0-0000
          </li>
          <li>
            <ListIcon />
            Upstream Cable Connector: ODU A10WBM-P12XMM0
          </li>
          <li>
            <ListIcon />
            Downstream Cable Connector: ODU A10WCM-P12XMM0
          </li>
          <li>
            <ListIcon />
            Port Speed: Super, high, full, or low-speed device connections and
            super or high-speed host connection
          </li>
        </ul>
        <h6>Power:</h6>
        <ul>
          <li>
            <ListIcon />
            Power Source: Self-powered with external supply
          </li>
          <li>
            <ListIcon />
            Consumption: 19 watts with full power to all downstream devices
          </li>
          <li>
            <ListIcon />
            Self-Power Input Voltage: 18-36 VDC @ 1A
          </li>
          <li>
            <ListIcon />
            Output (Downstream): 5VDC at 900mA per port with overcurrent
            protection
          </li>
        </ul>
        <h6>Environmental:</h6>
        <ul>
          <li>
            <ListIcon />
            Operating Temperature: Minimum -40°C to Maximum +70°C
          </li>
          <li>
            <ListIcon />
            Storage Temperature: Minimum -55°C to Maximum +85°C
          </li>
          <li>
            <ListIcon />
            Cooling: Conduction/convection via case
          </li>
          <li>
            <ListIcon />
            Addition Certifications: Vibration and pyroshock
          </li>
          <li>
            <ListIcon />
            EMC/EMI Certifications: Emissions and susceptability
          </li>
          <li>
            <ListIcon />
            USB Certification: USB 3.1 Gen 1 SuperSpeed 5Gb/sec and USB 2.0
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat2/pro1/Rugged-Enhancements-RUH-Combined_Product-Flyer-Rev-00.pdf"
              download="Rugged Enhancements product flyer Rev 03"
            >
              <PdfIcon /> Rugged Enhancements RUH Combined product flyer Rev 00
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat2",
    slug: "rugged-usb-repeater",
    name: "Rugged USB Repeater",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The Parraid Rugged USB Repeater (RUR) is a device that allows USB
          connections to be reliably extended. While USB is a widely used
          connection, it does suffer from a length limitation of 5 meters (16.4
          feet). Many installations need a longer cable run.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The Parraid Rugged USB Repeater™ (RUR) is a device that allows USB
          connections to be reliably extended. While USB is a widely used
          connection, it does suffer from a length limitation of 5 meters (16.4
          feet). Many installations need a longer cable run. Each RUR extends a
          connection between USB host and USB device; and multiple RUR devices
          can be added end-to-end to provide even more interface distance. The
          RUR is USB bus powered and requires no external power sources. The
          product is fully USB 2.0 high-speed compliant and designed to operate
          in harsh battlefield conditions.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <div className="ProductimgBox">
          <Image src={KeyImage.src} alt="KeyImage" fill />
        </div>
      </>
    ),
    tab5: (
      <>
        <h4>Features</h4>
        <ul>
          <li>
            <ListIcon />5 meters (16.4 feet) of extended length per RUR
          </li>
          <li>
            <ListIcon />
            Compact size and lightweight; mounts just about anywhere
          </li>
          <li>
            <ListIcon />
            Bus powered; gets power from USB
          </li>
          <li>
            <ListIcon />
            Rugged packaging; designed to meet MIL STD 810 requirements
          </li>
          <li>
            <ListIcon />
            Secure, high performance aircraft style connectors
          </li>
          <li>
            <ListIcon />
            EMI/RFI protection designed to meet MIL STD 461 requirements
          </li>
          <li>
            <ListIcon />
            USB 2.0 specification compliant
          </li>
          <li>
            <ListIcon />
            Multiple RURs can be linked end-to -end
          </li>
          <li>
            <ListIcon />5 RURs for self-powered USB devices
          </li>
          <li>
            <ListIcon />2 RURs for bus-powered USB devices up to 100 mA
          </li>
          <li>
            <ListIcon />
            No special USB drivers required; simple plug-in installation
          </li>
          <li>
            <ListIcon />
            Transparent to software applications
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat2/pro3/Rugged-Enhancements-RUR_Product-Flyer_Rev-03.pdf"
              download="Rugged Enhancements product flyer Rev 03"
            >
              <PdfIcon /> Rugged Enhancements product flyer Rev 03
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "best-source-reproducer-bsr-100",
    name: "Best Source Reproducer (BSR-100)",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          Experience seamless Best Source post-processing and reproduction with
          the BSR-100. This cutting-edge technology effortlessly processes up to
          32 recorded PCM streams from multiple diverse receiving / recording
          locations. The BSR-100 includes the Parraid 2-channel PSIMe PCM output
          board for PCM signal reproduction or simulation.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>File BDE™</h6>
        <p>
          Easily select channels for BDE processing and passing to output.
          Include correlation fields to align data channels. Configure out of
          lock output (Last-in-lock, Fake AAAA, Most-in-lock, Initial Source, or
          no fill). Select from multiple BDE algorithms including
          In-Lock-Weighted, Bit Vote, Last-in-lock, and DQE/DQM. Optionally
          repair corrupted frame synchronization patterns.
        </p>
        <h6>Origin™ Simulation Software</h6>
        <p>
          Create simulations including multiple PCM channels and a time channel
          with IRIG-A, B, or G output. Simulate data values for any word using
          preset data value generators or configure word values with CSV file
          lookup tables. Play existing Chapter 10 files to baseband signal
          outputs, UDP Chapter 10 streams or TMoIP 218-20 Streams.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <ul>
          <li>
            <ListIcon />
            Process up to 32 input streams from up to 32 Chapter 10 files.
          </li>
          <li>
            <ListIcon />
            Select from Bit Voting, In-lock, DQM, or Last-in-lock algorithms for
            Best Data processing.
          </li>
          <li>
            <ListIcon />
            Align all input channels to create the best composite output stream.
          </li>
          <li>
            <ListIcon />
            Output the “Best Data Stream” composited from all selected input
            channels.
          </li>
          <li>
            <ListIcon />
            Output Chapter 10 files, TMoIP, or baseband PCM signals.
          </li>
          <li>
            <ListIcon />
            File BDE™ is included for Data alignment, Best Data processing, and
            Chapter 10 file output.
          </li>
          <li>
            <ListIcon />
            Origin is included for data reproduction, simulation, and TMoIP
            output.
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "imux–g2e-and-g2eh",
    name: "IMUX G2e and G2eH",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          The IMUX G2e and the IMUX G2e Hybrid (G2eH) have many unique features
          such as supporting all industry-standard telemetry signal types, the
          ability to record two Chapter 10 files simultaneously – local and/or
          remote, simultaneous playback, and on-the-fly channel adjustment. All
          units can be equipped with optional integrated RF receivers, bit
          synchronizers, best source selection, and real-time decom, processing,
          and display capabilities. The new IMUX G2e Hybrid is equipped with all
          the existing powerful features the IMUX G2e has to offer plus the
          capability to input TMoIP channels (218-20 or CH10 / 11 UDP) directly
          into the recorder. This gives the G2eH the capability to record all
          channels (TMoIP Inputs and PCM Signal Inputs) as IRIG 106 Chapter 11
          PCM format.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The G2eH dynamically converts TMoIP 218-20 inputs to Chapter 10
          packets while recording, which allows for the G2eH, G2e, or any other
          CH10 reproducer to output baseband (PCM Data & Clock) from the
          recorded Chapter 10 file. The recorded file will also work with any
          Chapter 10 / 11 compliant tool set for processing and analysis. This
          unmatched feature gives the user a single box solution to record
          and/or reproduce legacy and present-day channel types all together.The
          IMUX G2e/G2eH can be configured as a rackmount or portable unit.
          Rackmount configuration options include a compact 2U chassis for up to
          4 channels and a robust 4U chassis for up to 32 channels. Touch screen
          and ruggedized systems for mobile applications and transport cases are
          available.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>FAST</h6>
        <ul>
          <li>
            <ListIcon />
            16 gigabit data bus
          </li>
          <li>
            <ListIcon />2 gigabit/sec throughput
          </li>
          <li>
            <ListIcon />
            High-speed removable SSD media
          </li>
        </ul>
        <h6>SCALABLE</h6>
        <ul>
          <li>
            <ListIcon />
            Multi-channel support for TMoIP (218-20 and CH10 UDP)*, PCM, Video
            (SD and HD), 1553 Format I and II, ARINC, Ethernet, Audio, UART, GPS
            / IRIG Time, and others
          </li>
          <li>
            <ListIcon />
            Stand-alone recorder to fully networked systems with remote
            capabilities
          </li>
          <li>
            <ListIcon />
            Custom parameter data displays, alarm and status indicators
          </li>
          <li>
            <ListIcon />
            Best Data Engine for highest quality data stream creation
          </li>
          <li>
            <ListIcon />
            Available integrated receivers and/or bit synchronizers
          </li>
          <li>
            <ListIcon />
            Multi-core decom and parameter processing
          </li>
          <li>
            <ListIcon />
            Integrated Low Latency Hot Mic audio output
          </li>
          <li>
            <ListIcon />
            Data/signal status quick reviews
          </li>
          <li>
            <ListIcon />
            Available integrated GPS time support
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "best-data-engine-bde",
    name: "Best Data Engine BDE",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Description</h5>
        <p>
          Best Data Engine (BDE) is a method of Best Source Selection that
          accepts multiple PCM input channels, compares them, then creates a new
          “composite” output PCM channel that represents the best data based on
          the selected Best Data algorithm. BDE has several instantiations, they
          include File BDE, G2 BDE, and OMEGA NExT™ BDE.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>File BDE</h6>
        <p>
          File BDE operates on existing IRIG-106 Chapter 10 files and produces a
          new Chapter 10 file based on the BDE configuration. File BDE can
          process up to 32 PCM input channels from a selection of up to 24
          Chapter 10 files. File BDE allows the selection of input source
          channels from each source file and whether or not the selected source
          channels will be output along with the Best Source channel in the
          resulting output file. The Best Source channel is the composite stream
          containing the best data based on the selected algorithm.
        </p>
        <h6>G2 BDE</h6>
        <p>
          G2 BDE is an optional license for the IMUX-G2 Telemetry Recorder. It
          operates in real-time recording input channels and the BDE output
          channel. G2 BDE can also reconstruct the BDE output channel as a
          base-band PCM output channel.
        </p>
        <h6>OMEGA NExT™ BDE</h6>
        <p>
          OMEGA NExT™ BDE is an optional license for the OMEGA NExT™ software
          suite. It operates in real-time or playback and produces the BDE
          output stream as a separate stream for processing and display.
        </p>
        <h6>BDE Algorithm Types</h6>
        <ul>
          <li>
            <ListIcon />
            <strong>Bit vote:</strong> Does a bit-by-bit comparison of each bit
            in a minor frame and selects the most common bit for the BDE output
            stream.
          </li>
          <li>
            <ListIcon />
            <strong>In-Lock-Weighted:</strong> Aligns data and makes a decision
            based on which streams have been in lock the most, for the longest
            period of time, most recently
          </li>
          <li>
            <ListIcon />
            <strong>DQM Voting:</strong> Outputs the stream with the current
            best encapsulated Data Quantity Metric.
          </li>
          <li>
            <ListIcon />
            <strong>Last In Lock:</strong> Outputs the stream most recently in
            lock as the BDE output stream.
          </li>
        </ul>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "edge2-telemetry-reciver",
    name: "Edge2 Telemetry Receiver/Decom",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The Edge2 unit when configured with receiver modules provides users
          with complete single or dual stream RF-to-Ethernet telemetry data
          processing.
        </p>
        <ul>
          <li>
            <ListIcon />
            Portable & Rack-Mount Options Available
          </li>
          <li>
            <ListIcon />
            Tri-Band L/S/C
          </li>
          <li>
            <ListIcon />
            Ideal for flight-line, mobile telemetry trailers or control rooms
          </li>
          <li>
            <ListIcon />
            TMoIP output
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The Edge² is engineered to provide network telemetry processing at the
          edge in a portable or rack-mountable 2 channel unit. Three Edge²
          appliances may be rack-mounted side-by-side supporting up to 6
          channels of RF, BitSync, or Decom processing in a 1U rack space. Each
          Edge² unit provides LED status indicators for; Receiver Status,
          BitSync Status, Frame Sync Status, Time Status, and Ethernet activity.
        </p>
        <p>
          The Edge² unit when configured with receiver modules provides users
          with complete single or dual stream RF-to-Ethernet telemetry data
          processing. Capable of supporting all telemetry frequency bands from
          200 MHz to beyond 5.15 GHz, these systems provide complete RF input to
          TMoIP (IRIG 106 Chapter 10/11 or IRIG 218-20) Ethernet output in a
          single compact 1U rackmount industrial enclosure.
        </p>
      </>
    ),
    tab5: (
      <>
        <h4>Features</h4>
        <ul>
          <li>
            <ListIcon />
            TMoIP Output supports IRIG 218-20 or CH10 (selectable per channel).
          </li>
          <li>
            <ListIcon />
            Includes an optional Tri-band receiver that supports RF to TMoIP
            (Chapter 10/11 & IRIG 218-20).
          </li>
          <li>
            <ListIcon />
            Offers optional high-performance Bit Synchronizers.
          </li>
          <li>
            <ListIcon />
            Provides 1 dB Bit Sync Performance.
          </li>
          <li>
            <ListIcon />
            Supports up to 50 Mbps bitrate per channel.
          </li>
          <li>
            <ListIcon />
            Capable of 2-channel, 100 Mbps output via a 1 Gbps port.
          </li>
          <li>
            <ListIcon />
            Exceeds Class II embedded channel specifications.
          </li>
          <li>
            <ListIcon />
            Supports jumbo frames up to 9000 MTU.
          </li>
          <li>
            <ListIcon />
            Delivers a typical noise figure of less than 5.0 dB.
          </li>
          <li>
            <ListIcon />
            Accepts IRIG A, B, and G, as well as IEEE 1588 PTP time.
          </li>
          <li>
            <ListIcon />
            Ingests Chapter 4, Chapter 7, and Chapter 8 formats.
          </li>
          <li>
            <ListIcon />
            Features integrated OMEGA NExT real-time data processing, display,
            data reduction, and data distribution.
          </li>
          <li>
            <ListIcon />
            Can support up to 6 channels in a 1U rack space.
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro3/Edge2-Telemetry-Network-Appliance_Spec-Sheet-1.pdf"
              download="IMUX G3 TMoIP Data Processing Product Flyer"
            >
              <PdfIcon /> Edge2 Telemetry Network Appliance Spec Sheet
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "g3-tmoip-data-processing",
    name: "G3 TMoIP Data Processing",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The G3 Telemetry-over-IP (TMoIP) Recorder-Processing system represents
          the next generation of telemetry data recording and processing
          platforms.
        </p>
        <p>IMUX G3 TMoIP Data Processing Product Flyer</p>
        <ul>
          <li>
            <ListIcon />
            TMoIP Input / IRIG 106 Ch 10 Archive
          </li>
          <li>
            <ListIcon />
            Selectable IRIG Codes, In and Out
          </li>
          <li>
            <ListIcon />
            Tunable Bit Rates Up to 60 Mbps
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The G3 Recorder-Processing system represents the next generation of
          telemetry data recording and processing platforms. It supports over 24
          input channels, including 20 PCM streams received as IRIG standard
          TMoIP Ethernet input(s). G3 includes extreme real-time processing
          capability with the integrated NExT Best Data Engine (BDE) and NExT
          raw data distribution and parameter processing capabilities. G3
          provides both 1G and 10G Ethernet ports and includes TPM 2.0.
        </p>
        <ul>
          <li>
            <ListIcon />
            2U 19” High-end Processing Platform
          </li>
          <li>
            <ListIcon />
            Local, RAID, NAS, or SAN storage
          </li>
          <li>
            <ListIcon />
            Signal I/O for PCM, Video, UART, 1553, ARINC, Ethernet, TMoIP and
            others
          </li>
          <li>
            <ListIcon />
            NExT Professional Data Processing with BDE and TMoIP Input Support
          </li>
        </ul>
        <h6>Powerful</h6>
        <ul>
          <li>
            <ListIcon />
            3.0 GHz 12-core / 24-thread, 128GB RAM – standard Configuration
          </li>
          <li>
            <ListIcon />
            Up to 10TB data storage: 8TB RAID5 – standard configuration
          </li>
          <li>
            <ListIcon />
            Multiple-instantiation BDE – real-time TMoIP input
          </li>
          <li>
            <ListIcon />
            10G Ethernet – standard configuration
          </li>
        </ul>
        <h6>Flexible</h6>
        <ul>
          <li>
            <ListIcon />
            Simultaneous Local and Remote Data storage – raw and processed data
          </li>
          <li>
            <ListIcon />
            Real-time Strip-n-Ship serial PCM and Ethernet data throughput
          </li>
          <li>
            <ListIcon />
            IRIG Chapter 10/11 and User-programmable Ethernet output
          </li>
          <li>
            <ListIcon />
            Most Complex Real-time Data Packet, PCM Frame, and Bus Processing
          </li>
          <li>
            <ListIcon />
            Stand-alone Platform or Fully-Networked Server/Client
          </li>
          <li>
            <ListIcon />
            Optional Data Mining
          </li>
        </ul>
        <h6>Reliable</h6>
        <ul>
          <li>
            <ListIcon />
            Dual, Redundant, Hot-plug Power Supply – standard configuration
          </li>
          <li>
            <ListIcon />
            Front Panel Removable Hot Swap Hard Drives – standard configuration
          </li>
          <li>
            <ListIcon />
            Trusted Platform Module 2.0
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro4/IMUX-G3-Recorder_Product_Flyer-Rev-03.pdf"
              download="IMUX G3 TMoIP Data Processing Product Flyer"
            >
              <PdfIcon /> IMUX G3 TMoIP Data Processing Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "imux-re-con",
    name: "IMUX RE/CON",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <h5>Network Recorder</h5>
        <p>
          The IMUX RE/CON network recorder is a telemetry specific ground
          network recorder ideally suited for ranges moving to IP telemetry.
        </p>
        <ul>
          <li>
            <ListIcon />
            IP recording capabilities with telemetry specific on-the-fly
            conversion capability
          </li>
          <li>
            <ListIcon />
            provides automatic format detection
          </li>
          <li>
            <ListIcon />
            record IRIG 106 Ch10 files
          </li>
          <li>
            <ListIcon />
            playback from existing IRIG 106 Ch10 infrastructure
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The IMUX RE/CON network recorder is a telemetry specific ground
          network recorder ideally suited for ranges moving to IP telemetry. 
          The IMUX RE/CON ground network recorder auto-detects telemetry
          packets, prioritizes telemetry streams over other network traffic, and
          converts common network telemetry formats to IRIG 106 Chapter 10 files
          on-the-fly. The IMUX RE/CON network recorder provides the ability to
          re-direct the recorded data to any network endpoint on playback. The
          IMUX RE/CON network recorder is available in multiple 2U and 4U rack
          mount configurations and supports a variety of network interface
          options.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>Easy to use</h6>
        <ul>
          <li>
            <ListIcon />
            Intuitive user interface with Administrator and Operator modes.
          </li>
          <li>
            <ListIcon />
            Automatic Telemetry Format Detection to simplify configuration and
            setup.
          </li>
          <li>
            <ListIcon />
            Snapshot viewer with format specific presentation simplifies data
            and video channel verification.
          </li>
          <li>
            <ListIcon />
            Import and Export setups via XLSX files.
          </li>
        </ul>
        <h6>Network Recording</h6>
        <ul>
          <li>
            <ListIcon />
            Record from multiple network interfaces simultaneously.
          </li>
          <li>
            <ListIcon />
            Standard 1Gbps and 10Gbps SFP+ network interfaces. Others available.
          </li>
          <li>
            <ListIcon />
            Record (sustained) write performance options to 4GB/s (32 Gbps).
          </li>
          <li>
            <ListIcon />
            Removable drives and storage capacities up to 64TB.
          </li>
        </ul>
        <h6>Reproduction</h6>
        <ul>
          <li>
            <ListIcon />
            Playback multi-channel payloads and/or CH10 files to user defined
            network endpoints.
          </li>
          <li>
            <ListIcon />
            Configurable playback start / end time and playback looping.
          </li>
        </ul>
        <h6>Conversion</h6>
        <ul>
          <li>
            <ListIcon />
            Simultaneously record network telemetry streams and RTP video
            streams to native binary format, video files, and IRIG 106 Chapter
            10 files.
          </li>
          <li>
            <ListIcon />
            Included CH10 TMATS utility for integrating TMATS post recording
            when UDP streaming TMATS is unavailable.
          </li>
          <li>
            <ListIcon />
            Integrated PCM Simulator boards available for local CH10 PCM signal
            reproduction.
          </li>
        </ul>
        <h6>Secure</h6>
        <ul>
          <li>
            <ListIcon />
            Integrated TPM 2.0 standard on all models.
          </li>
          <li>
            <ListIcon />
            FIPS compliant removable SDD drives available.
          </li>
        </ul>
        <h6>Dependable</h6>
        <ul>
          <li>
            <ListIcon />
            Dual Redundant Power supplies standard.
          </li>
          <li>
            <ListIcon />
            Based on 20+ years of telemetry recording and processing pedigree.
          </li>
          <li>
            <ListIcon />
            Thousands of systems deployed in challenging and mission-critical
            applications.
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro7/IMUX-RE-CON-Network-Recorder_Product-Flyer-Rev-01.pdf"
              download="IMUX RE-CON"
            >
              <PdfIcon /> IMUX RE-CON
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "omega-data-environment-ode",
    name: "Omega Data Environment (ODE)",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The OMEGA Data Environment software is available as a single-user or a
          multi-user distributed post mission data processing and time-series
          data mining solution. The OMEGA Data Environment architecture is
          designed to be data format agnostic. Several formats are included out
          of the box and programmatic interfaces are provided to accept any data
          format that you may require for both input and output. ODE provides
          user controls at the data set level or down to the individual
          parameter level and can integrate with your existing Active Directory
          infrastructure to provide customizable security for data access.
        </p>
        <ul>
          <li>
            <ListIcon />
            Multi-user, Post-test Time E-series Data
          </li>
          <li>
            <ListIcon />
            Data Mining with Parametric Value Search
          </li>
          <li>
            <ListIcon />
            Data Format Agnostic
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>OMEGA Data Environment (ODE)</h6>
        <p>Secure Mining and Exploitation of Large Data Sets</p>
        <p>
          ODE enables data analysts and consumers to rapidly and securely
          explore and exploit large data sets.
        </p>
        <p>ODE Users can:</p>
        <ul>
          <li>
            <ListIcon />
            Create Data Products
          </li>
          <li>
            <ListIcon />
            Merge Data from Multiple File Sources
          </li>
          <li>
            <ListIcon />
            Find data of interest
          </li>
          <li>
            <ListIcon />
            Organize Data Sets and Data Products
          </li>
          <li>
            <ListIcon />
            Correlate and Compare Data Sets
          </li>
          <li>
            <ListIcon />
            Collaborate with other ODE user
          </li>
        </ul>
        <p>
          Using Object-Oriented Data Management (OODM) technology, ODE users can
          quickly navigate and interact with their data sets over existing
          networks without modifying the format of the original data set.  The
          result is an order of magnitude improvement in data access time and
          productivity. ODE grows with your organization by providing software
          interfaces to support custom input and output formats.
        </p>
        <h6>ODE Security is Robust and Layered</h6>
        <p>
          ODE integrates with your existing Microsoft Active Directory®
          infrastructure to provide role-based user and data access.  User and
          data interaction is extremely flexible and configurable down to the
          individual parameter level.  All user and data interaction is logged
          to satisfy the most demanding commercial requirements, including ITAR.
          ODE also provides FIPS-compliant encryption of all network traffic.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>Data Type and Format Agnostic</h6>
        <p>
          Since ODE is built on OODM, it can be used for virtually any type of
          data regardless of format or origin.  The included Input and Output
          Component APIs give the end user the flexibility they need to support
          new data formats for both input and output.
        </p>
        <p>Included input formats:</p>
        <ul>
          <li>
            <ListIcon />
            IRIG 106 Chapter 10
          </li>
          <li>
            <ListIcon />
            CSV
          </li>
          <li>
            <ListIcon />
            OMEGA SERV Archive
          </li>
          <li>
            <ListIcon />
            BufFile
          </li>
          <li>
            <ListIcon />
            Third-party BIN, NPD (DARv3)
          </li>
          <li>
            <ListIcon />
            Other inputs available
          </li>
        </ul>
        <h6>ODE Security is Robust and Layered</h6>
        <p>
          ODE integrates with your existing Microsoft Active Directory®
          infrastructure to provide role-based user and data access.  User and
          data interaction is extremely flexible and configurable down to the
          individual parameter level.  All user and data interaction is logged
          to satisfy the most demanding commercial requirements, including ITAR.
          ODE also provides FIPS-compliant encryption of all ODE network
          traffic.
        </p>
        <h6>TDM & Message Data Capabilities</h6>
        <p>
          ODE’s data processing engines provide the raw processing power to
          process time division multiplexed data at rate that eclipse real-time
          by orders of magnitude.  ODE’s scalable, multiprocessor / core
          architecture rips through IRIG 106 Chapter 10 data files in multiples
          of real-time and gives users unparalleled access to the flow and
          content of message data intensive test platforms.
        </p>
        <p>Types of data supported include</p>
        <ul>
          <li>
            <ListIcon />
            PCM and other TDM data
          </li>
          <li>
            <ListIcon />
            1553, A429, and other Bus Data
          </li>
          <li>
            <ListIcon />
            Voice
          </li>
          <li>
            <ListIcon />
            Video
          </li>
          <li>
            <ListIcon />
            TSPI
          </li>
          <li>
            <ListIcon />
            Documents
          </li>
          <li>
            <ListIcon />
            Imagery
          </li>
        </ul>
        <h6>Create Data Products</h6>
        <p>
          Component-based architecture enables ODE users to output data of
          interest in an unlimited array of formats for further distribution and
          analysis. User-defined metadata also can be included in the output to
          produce self-describing output files.
        </p>
        <p>Included output formats:</p>
        <ul>
          <li>
            <ListIcon />
            CSV
          </li>
          <li>
            <ListIcon />
            Excel
          </li>
          <li>
            <ListIcon />
            Matlab (HDF5 )
          </li>
          <li>
            <ListIcon />
            Other outputs available
          </li>
        </ul>
        <p>
          The included ODE Output Component API ensures that ODE never becomes
          obsolete.  New output components can be created at any time to support
          any new output format requirements.
        </p>
        <h6>Merge Data From Multiple Sources</h6>
        <p>
          ODE’s OODM technology makes it easy for users to quickly merge data
          from multiple files into a single output file without regard for the
          original data format. Parameters from any number of files may be
          selected for output to quickly create a single file, time-aligned with
          all of the relevant information a user may require for reporting or
          analysis.  The task of properly incorporating data from multiple files
          of various formats with ODE takes minutes rather than days or weeks
          using other tools.
        </p>
        <h6>Quickly and Easily Search Petabytes of Data</h6>
        <p>
          Using web services and Internet-based search technology, ODE provides
          users with an unprecedented speed of access to data. ODE provides
          access to locally stored data or data stored on any network accessible
          location across a LAN or WAN.
        </p>
        <p>
          Unique StatPack™ technology leverages metadata to render a graphically
          intuitive view of large data sets. StatPack™ visualization technology
          allows for viewing the RAW or EU converted values of individual
          parameters from the beginning through the end of the archive,
          instantly revealing any dropouts or anomalies within the archive.
        </p>
        <p>
          Search queries ranging from simple Boolean expressions to complex C#
          algorithms can be applied against any number of data sets
          simultaneously. User-defined metadata also can be used within search
          expressions to fine tune search results.
        </p>
        <h6>Organize Data for Ease of Access</h6>
        <p>
          ODE provides a robust set of built-in filters and a capability for
          user-defined filters allowing users to determine how their data is
          organized, aggregated, and presented within the workspace. ODE users
          also can leverage ODE’s robust metadata capabilities to quickly find
          the data sets or events of interest.
        </p>
        <h6>Correlate and Compare Data</h6>
        <p>
          ODE allows users to correlate multiple independent data sets against
          events, time, or each other.
        </p>
        <p>Applications are unlimited and include:</p>
        <ul>
          <li>
            <ListIcon />
            Simulation vs. actual data
          </li>
          <li>
            <ListIcon />
            Video vs. time series data
          </li>
          <li>
            <ListIcon />
            Multiple iterations of the same test scenario
          </li>
        </ul>
        <p>
          ODE users also can create custom-derived parameters that receive
          inputs from multiple independent data files.
        </p>
        <h6>Disseminate and Collaborate</h6>
        <p>
          ODE allows users to publish the results of their investigations
          (including inherited metadata) within the ODE workspace. This permits
          other users with appropriate permissions to access and leverage the
          work of others.  Simply using ODE enables users to build
          “ad-hocracies” and increases the value of their data over time.​
        </p>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro8/ODE_Product-Flyer-Rev-033.pdf"
              download="Omega Data Environment (ODE) Software Product Flyer"
            >
              <PdfIcon /> Omega Data Environment (ODE) Software Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "omega-next-real-time-data-processing-software",
    name: "OMEGA NExT Real Time Data Processing Software",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The OMEGA NExT software suite provides Realtime Processing, EU
          conversion, Data Distribution, Display, and Chapter 10 compliant Data
          Recording and is one of the most powerful and easy to use telemetry
          data processing software ever produced. Developed specifically for
          IRIG 106 Chapter 10 packet processing on a modern Service Oriented
          Architecture (SOA), OMEGA NExT provides unparalleled stability,
          performance, and flexibility.
        </p>
        <ul>
          <li>
            <ListIcon />
            Omega NExT provides EU conversion, data distribution, real-time
            display, and Chapter 10 compliant data…
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>OMEGA-NExT</h6>
        <p>
          OMEGA-NExT offers an unmatched blend of power, ease of use,
          flexibility, and affordability.
        </p>
        <h6>OMEGA NExT Processing Software</h6>
        <p>
          Building on a native 64-bit multi-threaded, service-oriented
          architecture, the intuitive user interface enables users to rapidly
          configure an unlimited range of combined, custom, and native
          processing configurations in minutes.
        </p>
        <h6>Flexible Data Sources</h6>
        <p>
          OMEGA NExT accepts input from a variety of data sources. OMEGA NExT is
          the real-time processing foundation for Parraid Series-5000 / X-5000
          and G3 hardware platforms and can be added to Parraid IMUX G2 IRIG 106
          Chapter 10 recorders for real-time processing directly on the recorder
          platform. OMEGA NExT also provides a flexible Ethernet input
          capability providing real-time processing from Ethernet sources such
          as Chapter 10 broadcast from any Chapter 10 compliant recorder, NPD
          (DARv3), and TMnS sources.
        </p>
        <h6>Clarity Display Software</h6>
        <p>
          Using the latest vector display technology, Clarity delivers new
          levels of richness and depth.  Clarity Builder allows display
          designers to quickly define the ultimate user experience.  Clarity
          clients allow users to view their data and interact with their
          displays in real time or playback. There are no license installation
          restrictions on Clarity Display and Builder software; they may be
          installed on as many platforms as desired by the end user(s). Clarity
          Displays feature programmable sample-driven and data-driven support in
          the presentation of real-time and file playback data. Clarity Display
          clients may connect to any NExT server system for data presentation of
          any telemetry data source inputs. All Clarity Display clients feature
          programmable instant replay for immediate re-examination of displayed
          data, without requiring playback of front-end recorder file, before
          resuming real-time data monitoring.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>Intuitive User Interface</h6>
        <p>
          Based on a project-oriented design with secure Basic User operation,
          the OMEGA NExT user interface steps you through the configuration of
          your system from beginning to end with an intuitive design.
        </p>
        <h6>Multi-Threaded & Multi-Core</h6>
        <p>
          Speed and scalability are fundamental to the design philosophy of
          OMEGA NExT.  Able to scale its core processing engine across any
          number of system cores, OMEGA NExT establishes new benchmarks for
          speed in the real-time and post processing domains.
        </p>
        <h6>Service Oriented Architecture</h6>
        <p>
          OMEGA NExT is designed from its foundation on a modern service
          oriented architecture solution to telemetry processing.  Leveraging IT
          infrastructure, it can easily be deployed and provisioned in
          virtualized environments across the extended enterprise.
        </p>
        <h6>Parameter Organization</h6>
        <p>
          The OMEGA NExT Parameter Picker tool provides easy access to the
          entire parameter database and supports filterable organization of
          parameters and lists of parameters for independent output, displays,
          data storage, etc. The Parameter Picker tool is intelligently
          incorporated in all software products throughout the product line for
          familiarity and ease-of-use.
        </p>
        <h6>Comprehensive APIs</h6>
        <p>
          A library of extensive application programming interfaces with sample
          source code are provided for inputs and outputs of the processing
          engine, custom processing steps and functions, as well as for external
          control and status monitoring of the OMEGA NExT application itself.
          These APIs allow OMEGA NExT to operate as the heart of any customized
          telemetry processing solution.
        </p>
        <h6>Native 64-Bit</h6>
        <p>
          Built from the ground up as a Native 64-bit application, OMEGA NExT is
          able to leverage tens of gigabytes of memory at rates unheard of with
          legacy systems. Moreover, challenging double precision math is no
          longer an issue, making many complex derived parameters a thing of the
          past.
        </p>
        <h6>Network Extensibility</h6>
        <p>
          No longer is your telemetry infrastructure bound to point solutions. 
          If your test requires assets to be deployed over a wide geographical
          area, the OMEGA NExT will deliver unprecedented capability to
          integrate and merge dispersed data sources in real-time and post
          mission.
        </p>
        <h6>Scalable</h6>
        <p>
          OMEGA NExT can be scaled from a simple single=stream checkout system,
          to a full-blown mission control center, all using the same software.
          Using soft license key technology, users can rapidly upgrade their
          systems simply by purchasing advanced features and enabling them via a
          new software key.​
        </p>
        <h6>Visual Processing</h6>
        <p>
          OMEGA NExT offers an incredible pallet of over 135 built-in drag and
          drop libraries for input format conversions, masking, bit
          concatenation, logic, math, trigonometry as well as the ability to
          include an unlimited array of custom user-coded functions.  With the
          included Custom Instruction Wizard you can build your own custom coded
          processing instructions directly into the system in minutes.
        </p>
        <h6>Focus Data Distribution</h6>
        <p>
          The Focus Data Distribution utility of OMEGA NExT provides high-speed
          network output of selected parameters in a variety of common formats
          or you can define your own output formats. Any subset or all
          parameters may be programmed for fixed sample rate and/or data-driven
          (all processed samples) output for networked clients for display,
          storage, and/or further processing.
        </p>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro9/OMEGA-NExT_Product-Flyer-Rev-03.pdf"
              download="OMEGA NExT Software Product Flyer"
            >
              <PdfIcon /> OMEGA NExT Software Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
          <div className="icon">
            <a
              href="/products/cat3/pro9/BDE_Product-Flyer-Rev-00.pdf"
              download="BDE Product Flyer"
            >
              <PdfIcon />
              BDE Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "series-5000-data-processors",
    name: "Series-5000 Data Processors",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          The Series-5000 is real-time data processing platform available in
          portable and rack-mount configurations: 2U and 4U, ruggedized and
          industrial.
        </p>
        <ul>
          <li>
            <ListIcon />
            The Series 5000 telemetry hardware platform is a fifth generation
            architecture leveraging more..
          </li>
        </ul>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <p>
          The Series-5000 is real-time data processing platform available in
          portable and rack-mount configurations: 2U and 4U, ruggedized and
          industrial. Multi-stream support ranges from 2 to 16 simultaneous
          serial PCM inputs with no-latency hot mic PCM-embedded audio
          output(s). Series-5000s may include optional 1dB Bit Syncs and/or RF
          Receivers for accepting noisy data-only or digital data/clock inputs.
          Integrated programmable data time-stamping is supported with
          selectable IRIG A, B, and G, external time input, serial PCM-embedded
          and network-embedded data inputs, and local system time. Time Data
          Resolution of +/-100nS enables inter-channel skew of less than 1uS.
          Stream and parameter-based data extraction is supported for local
          storage and custom processing, and network strip-n-ship operations.
          Systems may range from stand-alone portable units, to multi-system
          theater control rooms with many local and remote Ethernet clients.
          Series-5000 PCM inputs may range from simple and complex
          industry-standard IRIG Ch4 formats, to industry standard Ch7 and Ch8
          stream definitions, and also includes unique customer-specific
          multi-stream and multi-depth PCM-embedded formats.
        </p>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>Series-5000 / OMEGA-NExT</h6>
        <ul>
          <li>
            <ListIcon />
            High-Performance Real-Time and File Data Processing
          </li>
          <li>
            <ListIcon />
            Intuitive | Net-Centric | Native 64-Bit | Multi-Threaded | Any
            Signal Type
          </li>
          <li>
            <ListIcon />
            Native Chapter 10 | Extensiv​e API Support | Secure Basic User
            Operation
          </li>
          <li>
            <ListIcon />
            Native Custom Interfacing
          </li>
        </ul>
        <h6>OMEGA-NExT Hardware Family</h6>
        <p>
          OMEGA-NExT supports a wide range of telemetry signal platforms – from
          single-source to many-source inputs, legacy hardware to fifth
          generation Series-5000 systems, and standard Parraid-built platforms
          to third-party equipment data sources.
        </p>
        <h6>Series-5000 Real-Time Systems</h6>
        <p>
          Based on COTS Open Architecture, the Triple Bus Design Delivers
          Unprecedented Speed, Configurability, and Precision
        </p>
        <ul>
          <li>
            <ListIcon />
            Native Chapter 10
          </li>
          <li>
            <ListIcon />
            Up to 16Gbps Data Bus
          </li>
          <li>
            <ListIcon />
            Native multi-threaded 64-bit OS Suppor
          </li>
          <li>
            <ListIcon />
            Up to 60 Mbps/Channel Decom with A/B/G IRIG Time
          </li>
          <li>
            <ListIcon />
            Server and Stand-Alone Configurations
          </li>
          <li>
            <ListIcon />
            Extensive Native and Custom Parameter Processing
          </li>
          <li>
            <ListIcon />
            Native and Custom Network Client Support
          </li>
          <li>
            <ListIcon />
            Comprehensive API Interfaces
          </li>
          <li>
            <ListIcon />
            Leading-Edge Multi-Core CPUs
          </li>
          <li>
            <ListIcon />
            Portable and Rack-Mount
          </li>
          <li>
            <ListIcon />
            Two to Many-stream Systems with Optional Receivers and/or Bit Syncs
          </li>
          <li>
            <ListIcon />
            Raw and processed data storage, removable SSD media
          </li>
        </ul>
      </>
    ),
    tab4: (
      <>
        <h4>Data Sheets</h4>
        <div className="downloadIcon">
          <div className="icon">
            <a
              href="/products/cat3/pro10/Series-5000_Product-Flyer-Rev-01.pdf"
              download="Series-5000 Product Flyer"
            >
              <PdfIcon /> Series-5000 Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
          <div className="icon">
            <a
              href="/products/cat3/pro10/OMEGA-NExT_Product-Flyer-Rev-0333.pdf"
              download="OMEGA NExT Software Product Flyer"
            >
              <PdfIcon /> OMEGA NExT Software Product Flyer
              <Download className="downloadIcon" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    cat: "cat3",
    slug: "rx2-receiver",
    name: "Rx2 Receiver",
    images: [C1Pro1_1, C1Pro1_2, C1Pro1_3],
    txt: (
      <>
        <p>
          TDS offers the Rx2 rack mount multi-channel receiver and combiner as
          well as PCI card level receivers and combiners. All of our receiver
          products use the latest in digital radio technology.
        </p>
      </>
    ),
    tab1: (
      <>
        <h4>Overview</h4>
        <h6>Latest Technology for RF to Ethernet </h6>
        <ul>
          <li>
            <ListIcon />
            Tri-band; L,​S,C Bands – Optional C-Band IF
          </li>
          <li>
            <ListIcon />
            Compact Portable to Rugged Touch-screen and Airborne Platforms
          </li>
          <li>
            <ListIcon />
            Demods
          </li>
        </ul>
        <h6>AM, PCM/FM, PM, BPSK, OPSK, SOQPSK-TG</h6>
        <ul>
          <li>
            <ListIcon />
            High Density
          </li>
          <li>
            <ListIcon />
            Up to 14 Receivers per Chassis
          </li>
          <li>
            <ListIcon />
            Dual Receiver & Diversity Combiner on a Single Card
          </li>
          <li>
            <ListIcon />
            Latest DSP Technology
          </li>
          <li>
            <ListIcon />
            Antenna Control / Signal Monitoring
          </li>
          <li>
            <ListIcon />
            Chapter 10/11 Ethernet Data Output
          </li>
        </ul>
      </>
    ),
    tab2: (
      <>
        <h4>Key System Advantage</h4>
        <h6>Flexible</h6>
        <ul>
          <li>
            <ListIcon />
            Intuitive GUI
          </li>
          <li>
            <ListIcon />
            Built-in Touchscreen
          </li>
          <li>
            <ListIcon />
            Embedded Ethernet Control
          </li>
          <li>
            <ListIcon />
            Field Upgradable
          </li>
          <li>
            <ListIcon />
            Spectral/Video/Constellation Displays
          </li>
          <li>
            <ListIcon />
            Numerous Output Features
          </li>
        </ul>
        <h6>Reliable</h6>
        <ul>
          <li>
            <ListIcon />
            Dual Redundant Power Supplies
          </li>
          <li>
            <ListIcon />
            Rugged Touchscreen
          </li>
          <li>
            <ListIcon />
            Embedded Controller
          </li>
          <li>
            <ListIcon />
            Low Parts Count/High MTBF
          </li>
          <li>
            <ListIcon />
            Embedded Controller
          </li>
        </ul>
        <h6>Economical</h6>
        <ul>
          <li>
            <ListIcon />
            Card-Level Products
          </li>
          <li>
            <ListIcon />
            Optional Integrated:​ – Bit Syncs – Decoms – Chapter 10
            Recording/Reproduction – Real-Time Processing – Post-Test Processing
            – Data Mining – Data Visualization​
          </li>
        </ul>
      </>
    ),
  },
];
