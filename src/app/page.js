import * as React from 'react';
import { styled } from '@pigment-css/react';
import Footer from '../component/Footer';
import ProjectHeader from '../component/ProjectHeader';
import TextBlock from '../component/TextBlock';
import ProjectLinks from '../component/ProjectLink';
import VideoBlock from '../component/Video/Video';
import ImageBlock from '../component/ImageBlock/ImageBlock';
import CiteUs from '../component/Cite/Cite';

export default function Home() {
  return (
    <>
      <Main>
        {/* <ProjectHeader
          title="ETA-IK: Execution-Time-Aware Inverse Kinematics for Dual-Arm Systems"
          authors={
            <>
            <a href="https://yucheng-tang.github.io" target="_blank" rel="noopener noreferrer">Yucheng Tang</a>, <a href="https://xi-hhhm.github.io/roboX.huang/" target="_blank" rel="noopener noreferrer">Xi Huang</a>, Yongzhou Zhang, Tao Chen, <a href="https://scholar.google.com/citations?user=MrbPxXEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Ilshat Mamaev</a>, and <a href="https://scholar.google.se/citations?user=RqTDkH4AAAAJ&hl=de" target="_blank" rel="noopener noreferrer">Björn Hein</a>
          </>
          }
          affiliations={
            <>
              <a href="https://ipr.iar.kit.edu/" target="_blank" rel="noopener noreferrer">Intelligent Process Automation and Robotics Lab, Karlsruhe Institute of Technology</a>, 
              <a href="https://www.h-ka.de/en/iras/profile" target="_blank" rel="noopener noreferrer">Institute for Robotics and Autonomous Systems, University of Applied Sciences</a>, 
              <a href="" target="_blank" rel="noopener noreferrer">Proximity Robotics and Automation GmbH</a>
            </>
          }
          publishedAt="Under review for IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)"
        /> */}
        <ProjectHeader
          title="ETA-IK: Execution-Time-Aware Inverse Kinematics for Dual-Arm Systems"
          authors={[
            { name: "Yucheng Tang", url: "https://yucheng-tang.github.io", affiliations: [1, 2, 3], equal: true },
            { name: "Xi Huang", url: "https://xi-hhhm.github.io/roboX.huang/", affiliations: [1], equal: true },
            { name: "Yongzhou Zhang", affiliations: [2] },
            { name: "Tao Chen", affiliations: [2] },
            { name: "Ilshat Mamaev", url: "https://scholar.google.com/citations?user=MrbPxXEAAAAJ&hl=en", affiliations: [2, 3] },
            { name: "Björn Hein", url: "https://scholar.google.se/citations?user=RqTDkH4AAAAJ&hl=de", affiliations: [1, 2] }
          ]}
          affiliations={{
            1: "Intelligent Process Automation and Robotics Lab, Karlsruhe Institute of Technology",
            2: "Institute for Robotics and Autonomous Systems, Karlsruhe University of Applied Sciences",
            3: "Proximity Robotics and Automation GmbH",
          }}
          publishedAt="Under review for IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)"
        />
        <ProjectLinks
          links={
            [
              { iconId: "archive", label: "Paper", href: "https://arxiv.org/abs/2411.14381" },
              { iconId: "github", label: "Code", href: "" },
            ]
          }
        />
        <TextBlock title="Abstract">
          This paper presents ETA-IK, a novel Execution-Time-Aware Inverse Kinematics method tailored for dual-arm robotic systems. The primary goal is to optimize motion execution time by leveraging the redundancy of the entire system, specifically in tasks where only the relative pose of the robots is constrained, such as dual-arm scanning of unknown objects. Unlike traditional inverse kinematics methods that use surrogate metrics such as joint configuration distance, our method incorporates direct motion execution time and implicit collisions into the optimization process, thereby finding target joint configuration that enable more efficient and collision-free trajectory generation. A neural network based execution time approximator is employed to predict time-efficient joint configurations while accounting for potential collisions.
          Through experimental evaluation on a system composed of a UR5 and a KUKA iiwa robot, we demonstrate significant reductions in execution time. The proposed method outperforms conventional approaches, showing improved motion efficiency without sacrificing positioning accuracy. These results highlight the potential of ETA-IK to improve the performance of dual-arm systems in applications, where efficiency and safety are paramount.
        </TextBlock>
        <ImageBlock
          title="Problem Statement"
          imageSrc="/ETA_IK_first_page.png" // Change this to the path of your image under the public folder
        >
          TODO
        </ImageBlock>
        <ImageBlock
          title="Method Overview"
          imageSrc="/Pipeline_fixed.png" // Change this to the path of your image under the public folder
        >
          Given a desired perception pose, ETA-IK first generate a batch of initial configurations (yellow). A multilayer-perceptron time apporiximator are then integrated in a parallel optimization framework (blue). After N iterations, the results is a batch of joint configurations. The best solution is selected according to different criteria (green).
        </ImageBlock>
        <VideoBlock
          title="Demo Video"
          videoSrc="/IROS25.mp4" // Change this to the path of your video under the public folder
          videoAlt0="Demo Video"
        />
        <CiteUs
          entryType="article"
          citationKey="tang2025etaik"
          title="ETA-IK: Execution-Time-Aware Inverse Kinematics for Dual-Arm Systems"
          authors={["Yucheng Tang", "Xi Huang","Yongzhou Zhang", "Tao Chen", "Ilshat Mamaev", "Björn Hein"]}
          url="https://arxiv.org/abs/2411.14381"
          year="2025"
        />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  padding: 4rem var(--global-padding);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
