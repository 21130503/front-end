import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useSplitTextIntoPages } from '../../hook/useSplitText';
const content = 'Tạo nguồn đảng viên trẻHiện nay, công tác tạo nguồn phát triển đảng viên trẻ là nhiệm vụ quan trọng, thường xuyên của mỗi tổ chức đảng nhằm bổ sung đội ngũ đảng viên có chất lượng, đáp ứng yêu cầu, nhiệm vụ của đảng trong mỗi giai đoạn cách mạng.Đồng thời, đây cũng là nhiệm vụ quan trọng góp phần xây dựng tổ chức cơ sở đảng trong sạch, vững mạnh, nhằm tăng thêm sinh lực, sức chiến đấu, trẻ hoá đội ngũ đảng viên, bảo đảm sự kế thừa và phát triển của đảng.Xuất phát từ vị trí, vai trò đặc biệt quan trọng đó, trong những năm qua, Đảng bộ Phân hiệu Đại học Thái Nguyên (ĐHTN) tại tỉnh Lào Cai luôn làm tốt công tác phát triển đảng viên cả về số lượng và chất lượng.TS Vũ Thị Bình, Ủy viên Ban Thường vụ Đảng bộ, Phó Giám đốc Phân hiệu ĐHTN tại tỉnh Lào Cai cho biết: Thực hiện Nghị quyết số 02-NQ/ĐU ngày 09/01/2023 về lãnh đạo đẩy mạnh công tác phát triển đảng trong sinh viên, những năm qua, Đảng bộ Phân hiệu ĐHTN tại tỉnh Lào Cai rất chú trọng công tác phát triển Đảng, thường xuyên tổ chức các lớp bồi dưỡng nhận thức về Đảng cho quần chúng ưu tú, đã cụ thể hóa tiêu chuẩn, điều kiện kết nạp vào Đảng phù hợp điều kiện thực tế, nhằm phát triển chất lượng đội ngũ đảng viên của Đảng bộ. window.addEventListener(, function(){ if(typeof Web_AdsArticleMiddle{window.CMS_BANNER.pushAds(Web_AdsArticleMiddle,else{document.getElementByIdstyle.display = "none";} }); Phân hiệu luôn coi trọng việc tuyên truyền, giáo dục sinh viên nhận thức đầy đủ về ý nghĩa và tầm quan trọng của công tác phát triển Đảng viên trẻ. Việc làm này không chỉ góp phần tăng số lượng đảng viên, bảo đảm sự kế thừa và phát triển liên tục mà còn tạo môi trường thi đua, động lực cho học sinh phấn đấu, rèn luyện, trưởng thành.Các sinh viên được kết nạp Đảng là sinh viên tiêu biểu xuất sắc có thành tích học tập đạt loại giỏi, kết quả rèn luyện tốt trở lên, luôn có ý thức tổ chức, kỷ luật, xung kích trong các hoạt động, hoàn thành tốt nhiệm vụ được giao; vận dụng tốt những kiến thức đã được học trong nhà trường vào thực tiễn. Sinh viên trẻ được kết nạp Đảng đã tác động tích cực đến quần chúng, động viên quần chúng phấn đấu, học tập và có lý tưởng, mục đích để được đứng trong hàng ngũ của Đảng.Với các giải pháp trong lãnh, chỉ đạo phát triển đảng viên mới, từ năm 2021 đến nay, Đảng bộ Phân hiệu ĐHTN tại tỉnh Lào Cai đã kết nạp được 83 quần chúng được tham gia học Lớp Bồi dưỡng đối tượng Đảng (trong đó 12 đối tượng là cán bộ giảng viên, 71 đối tượng là sinh viên), kết nạp được 26 đảng viên mới, trong đó có 12 đối tượng là Cán bộ giảng viên; 14 đối tượng là sinh viên.Khắc phục những khó khăn, vướng mắc window.addEventListener(load, function(){ if(typeof Web_AdsArticleMiddle1 !=){window.CMS_BANNER.pushAds(Web_AdsArticleMiddle1, adsWeb_AdsArticleMiddle1else{document.getElementByI.style.display = "none";} }); Cũng theo TS. Vũ Thị Bình, bên cạnh những kết quả đã đạt được, công tác kết nạp đảng viên tại Phân hiệu vẫn còn gặp một số khó khăn, vướng mắc như: quần chúng là sinh viên chiếm ưu thế nên nhận thức chính trị chưa đồng đều, ý thức phấn đấu trở thành đảng viên chưa cao, chưa thường xuyên, mặt khác, tiêu chuẩn kết nạp đảng viên là sinh viên còn cao về tiêu chí kết quả học tập và rèn luyện nên số lượng đảng viên được kết nạp Đảng là sinh viên còn hạn chế;...Bên cạnh đó, quy mô đào tạo và số lượng sinh viên Phân hiệu ngày càng mở rộng, các cán bộ, giảng viên đa số đều kiêm nhiệm nhiều nhiệm vụ, phần lớn thời gian đều dành cho công tác chuyên môn nên kỹ năng, nghiệp vụ công tác Đảng còn hạn chế. Đảng viên mới Nguyễn Thu Hà tuyên thệ trước cờ Đảng. Thời gian tới, để công tác phát triển đảng viên đạt hiệu quả, Đảng ủy Phân hiệu Đại học Thái Nguyên tại Lào Cai sẽ tiếp tục quan tâm đúng mức công tác phát triển đảng viên trong sinh viên; tăng cường giáo dục lý tưởng cách mạng cho sinh viên; phát hiện, bồi dưỡng, xây dựng nhân tố tích cực trong sinh viên giới thiệu cho đảng đồng thời giúp đỡ sinh viên ưu tú trong quá trình phấn đấu vào đảng.Với mong muốn phát huy được sức trẻ, tính linh hoạt, chủ động và tiên phong, gương mẫu đi đầu trong mọi hoạt động, phong trào, Phân hiệu ĐHTN tại tỉnh Lào Cai sẽ tiếp tục là môi trường thuận lợi để những đảng viên trẻ, những đối tượng Đảng, đoàn viên ưu tú rèn luyện, cống hiến và trưởng thành. if(typeof Web_AdsArticleMiddle)'
const createPageTexture = (text) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    context.fillText(line, 10, 30 + index * 30);
  });
  
  return new THREE.CanvasTexture(canvas);
};

const EpaperDisplay = () => {
  const mountRef = useRef(null);
  const planeRef = useRef(null);
  const flipDirectionRef = useRef(1); // 1 for right, -1 for left
  const isFlippingRef = useRef(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useSplitTextIntoPages(content, 300).map(createPageTexture);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(5, 7); // Adjust size as needed
    const material = new THREE.MeshBasicMaterial({ map: pages[currentPage], side: THREE.DoubleSide });

    const plane = new THREE.Mesh(geometry, material);
    planeRef.current = plane;
    scene.add(plane);
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const flip = () => {
      if (isFlippingRef.current) return;

      isFlippingRef.current = true;
      let currentRotation = 0;
      const targetRotation = Math.PI;

      const flipAnimation = () => {
        if (currentRotation < targetRotation) {
          currentRotation += 0.1;
          plane.rotation.y = currentRotation * flipDirectionRef.current;
          requestAnimationFrame(flipAnimation);
        } else {
          isFlippingRef.current = false;
          plane.rotation.y = 0;

          const newPage = (currentPage + flipDirectionRef.current + pages.length) % pages.length;
          plane.material.map = pages[newPage];
          setCurrentPage(newPage);
        }
      };

      flipAnimation();
    };

    const handleClick = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      flipDirectionRef.current = x > width / 2 ? 1 : -1;
      flip();
    };

    mountRef.current.addEventListener('click', handleClick);

    return () => {
      mountRef.current.removeEventListener('click', handleClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [currentPage, pages]);

  return <div style={{ width: '700px', height: '700px' }} ref={mountRef}></div>;
};

export default EpaperDisplay;
