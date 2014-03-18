import React from 'react';
import PropTypes from 'prop-types';

class LoadingIndicator extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
        title
    } = this.props;
    return (
        <div className="spinning-progress" id="reprice-progress">
            <div className="rotating-gears">
                <svg className="big-gear animate-spin" width="91px" height="91px" viewBox="-1 20 91 91" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M55.6055003,75.7722263 C58.5351828,72.8425438 60.0000258,69.3073829 60.0000258,65.1667822 C60.0000258,61.0261814 58.5351828,57.49101 55.6055003,54.561338 C52.6758178,51.6316556 49.140657,50.1668126 45.0000562,50.1668126 C40.8594555,50.1668126 37.3242841,51.6316556 34.3946121,54.561338 C31.4649296,57.4910205 30.0000866,61.0261814 30.0000866,65.1667822 C30.0000866,69.3073829 31.4649296,72.8425543 34.3946121,75.7722263 C37.3242946,78.7019087 40.8594555,80.1667517 45.0000562,80.1667517 C49.140657,80.1667517 52.6758283,78.7019087 55.6055003,75.7722263 L55.6055003,75.7722263 Z M90,58.7800587 L90,71.7878653 C90,72.2566164 89.8437497,72.7058339 89.531249,73.1355215 C89.2187483,73.565209 88.8281242,73.8191163 88.3593767,73.8972397 L77.5195378,75.537863 C76.7773531,77.6472373 76.0156349,79.424574 75.2343832,80.8698975 C76.6015693,82.8230215 78.6914066,85.5183477 81.5038917,88.9558342 C81.8945158,89.4245852 82.0898296,89.9128662 82.0898296,90.4206772 C82.0898296,90.9284882 81.9140483,91.3777092 81.5624852,91.7683333 C80.5077998,93.2136463 78.5742022,95.3230347 75.7616961,98.0964668 C72.9491935,100.869909 71.1132459,102.256633 70.2538918,102.256633 C69.7851408,102.256633 69.2773298,102.080851 68.7304554,101.729288 L60.6445187,95.4011546 C58.9257719,96.2995932 57.1484248,97.0417779 55.3124841,97.6277158 C54.6874863,102.94022 54.1210784,106.573042 53.6132674,108.526145 C53.3398291,109.619893 52.6367054,110.166768 51.5038931,110.166768 L38.4960864,110.166768 C37.949212,110.166768 37.470696,110.000753 37.0605419,109.668722 C36.6503878,109.336691 36.425779,108.916769 36.3867156,108.408958 L34.7460923,97.6277088 C32.8320317,97.0027109 31.074211,96.2800527 29.4726477,95.459741 L21.2109412,101.72925 C20.8203171,102.080814 20.3320361,102.256594 19.7460982,102.256594 C19.1992237,102.256594 18.7109427,102.04175 18.2812552,101.612063 C13.3593852,97.1589473 10.1367286,93.8777007 8.61328512,91.7683228 C8.33984685,91.3776987 8.20312754,90.9284777 8.20312754,90.4206667 C8.20312754,89.9519157 8.35937788,89.5026981 8.67187856,89.0730106 C9.25781646,88.2526989 10.2539084,86.9538748 11.660158,85.1765346 C13.0664075,83.3991909 14.121093,82.0222363 14.8242177,81.0456638 C13.7695323,79.0925398 12.9687506,77.1589528 12.4218762,75.2448748 L1.69921722,73.6628449 C1.19140624,73.5847201 0.781248664,73.3405803 0.468747985,72.9304252 C0.156247306,72.5202711 -3.03333036e-06,72.0612851 -3.03333036e-06,71.5534741 L-3.03333036e-06,58.5456675 C-3.03333036e-06,58.0769164 0.156247306,57.6276989 0.468747985,57.1980113 C0.781248664,56.7683238 1.15234278,56.5144165 1.58202684,56.4362931 L12.4804556,54.7956698 C13.0273301,52.9987962 13.7890483,51.2019085 14.7656103,49.4050453 C13.2031104,47.1784841 11.113259,44.4831754 8.49610174,41.3191087 C8.10547764,40.8503576 7.91016384,40.3816101 7.91016384,39.9128591 C7.91016384,39.522235 8.08594521,39.073014 8.4375083,38.565203 C9.45313375,37.1589534 11.3769628,35.0593266 14.2090024,32.2663645 C17.041035,29.4733918 18.8867476,28.0769038 19.7461017,28.0769038 C20.2539127,28.0769038 20.7617271,28.2722165 21.2695381,28.6628417 L29.3554748,34.9323502 C31.0742215,34.0339116 32.8515687,33.2917269 34.6875093,32.705789 C35.3125072,27.3932845 35.8789151,23.7604632 36.3867261,21.8073602 C36.6601644,20.7136113 37.3632881,20.1667369 38.4961004,20.1667369 L51.5039071,20.1667369 C52.0507815,20.1667369 52.5292975,20.3327522 52.9394516,20.6647829 C53.3496057,20.9968135 53.5742144,21.4167361 53.6132779,21.9245471 L55.2539012,32.705796 C57.1679617,33.3307939 58.9257824,34.0534521 60.5273458,34.8737638 L68.8476422,28.6042552 C69.1992064,28.2526911 69.6679539,28.0769108 70.2538918,28.0769108 C70.7617028,28.0769108 71.2499838,28.2722235 71.7187348,28.6628487 C76.7577846,33.3112989 79.9804413,36.6316055 81.3867048,38.6237684 C81.6601431,38.9362691 81.7968624,39.3659567 81.7968624,39.9128311 C81.7968624,40.3815821 81.6406121,40.8307997 81.3281114,41.2604872 C80.7421735,42.0807989 79.7460815,43.379623 78.339832,45.1569632 C76.9335824,46.9343069 75.878897,48.3112615 75.1757722,49.287834 C76.1913977,51.240958 76.9921759,53.155015 77.5781138,55.0299981 L88.3007727,56.6706214 C88.8085837,56.7487462 89.2187413,56.992886 89.5312385,57.4030411 C89.8437392,57.8131952 89.9999895,58.2721812 89.9999895,58.7799922 L90,58.7800587 Z" stroke="none" fill="#BAC5B4" fill-rule="evenodd"></path>
                </svg>
                <svg className="gear-top animate-spin animate-reverse" width="56px" height="56px" viewBox="82 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M116.981126,34.1478576 C118.771487,32.3574967 119.666669,30.1971213 119.666669,27.6667551 C119.666669,25.1363888 118.771487,22.9760071 116.981126,21.1856526 C115.190765,19.3952917 113.03039,18.5001101 110.500024,18.5001101 C107.969657,18.5001101 105.809276,19.3952917 104.018921,21.1856526 C102.22856,22.9760135 101.333379,25.1363888 101.333379,27.6667551 C101.333379,30.1971213 102.22856,32.3575031 104.018921,34.1478576 C105.809282,35.9382185 107.969657,36.8334 110.500024,36.8334 C113.03039,36.8334 115.190772,35.9382185 116.981126,34.1478576 L116.981126,34.1478576 Z M137.99998,23.7637588 L137.99998,31.7129712 C137.99998,31.99943 137.904494,32.2739518 137.713521,32.5365385 C137.522548,32.7991253 137.283834,32.9542908 136.997377,33.0020328 L130.373033,34.0046356 C129.919476,35.2936973 129.453982,36.3798471 128.97655,37.2631 C129.812053,38.4566754 131.089175,40.1038186 132.807915,42.2045041 C133.04663,42.4909629 133.165989,42.7893568 133.165989,43.0996856 C133.165989,43.4100144 133.058567,43.6845383 132.843723,43.923253 C132.199193,44.8064995 131.01755,46.0955697 129.298797,47.7904443 C127.580046,49.4853253 126.458079,50.3327669 125.932918,50.3327669 C125.646459,50.3327669 125.33613,50.225345 125.001929,50.010501 L120.060525,46.1433096 C119.01018,46.6923552 117.924024,47.1459124 116.802061,47.5039855 C116.420118,50.7505149 116.07398,52.9705716 115.763651,54.1641341 C115.59655,54.832536 115.166863,55.1667369 114.474589,55.1667369 L106.525377,55.1667369 C106.191176,55.1667369 105.89875,55.0652831 105.6481,54.8623756 C105.39745,54.659468 105.260189,54.4028487 105.236317,54.0925199 L104.233715,47.5039812 C103.064011,47.1220382 101.989788,46.6804138 101.011055,46.1791124 L95.9622362,50.0104775 C95.7235215,50.2253221 95.4251277,50.3327434 95.0670547,50.3327434 C94.7328537,50.3327434 94.4344599,50.20145 94.1718731,49.9388633 C91.1640648,47.2175159 89.1946641,45.2123103 88.2636712,43.9232465 C88.0965701,43.6845319 88.0130195,43.410008 88.0130195,43.0996792 C88.0130195,42.8132203 88.1085058,42.5386986 88.2994783,42.2761119 C88.6575514,41.7748105 89.266274,40.9810848 90.1256485,39.8949329 C90.9850229,38.8087788 91.6295527,37.9673068 92.0592399,37.3705127 C91.4147101,36.1769374 90.9253437,34.9953013 90.5911428,33.8255873 L84.038409,32.8587916 C83.7280802,32.8110487 83.4774284,32.6618522 83.2864558,32.4112019 C83.0954833,32.1605523 82.999997,31.8800609 82.999997,31.5697321 L82.999997,23.6205197 C82.999997,23.3340608 83.0954833,23.0595391 83.2864558,22.7969524 C83.4774284,22.5343656 83.7042081,22.3792001 83.9667927,22.3314581 L90.6269413,21.3288553 C90.9611422,20.2307662 91.4266365,19.1326686 92.0234242,18.0345859 C91.0685635,16.6739101 89.7914326,15.0267775 88.1920592,13.0931818 C87.9533446,12.806723 87.8339862,12.5202663 87.8339862,12.2338074 C87.8339862,11.9950928 87.9414081,11.7205689 88.1562521,11.4102401 C88.7769119,10.5508656 89.9525848,9.26776078 91.6832751,7.56095118 C93.413961,5.85413516 94.5418961,5.00072608 95.0670568,5.00072608 C95.3773856,5.00072608 95.6877166,5.12008383 95.9980454,5.35879912 L100.939449,9.19016414 C101.989794,8.64111853 103.075951,8.18756135 104.197914,7.82948831 C104.579857,4.58295888 104.925995,2.3629022 105.236324,1.16933967 C105.403425,0.500937814 105.833111,0.166736884 106.525385,0.166736884 L114.474598,0.166736884 C114.808799,0.166736884 115.101225,0.268190662 115.351875,0.471098216 C115.602524,0.674005771 115.739785,0.93062503 115.763657,1.24095385 L116.76626,7.82949259 C117.935963,8.21143559 119.010187,8.65305993 119.98892,9.15436133 L125.073543,5.32299631 C125.288388,5.10815163 125.574845,5.00073036 125.932918,5.00073036 C126.243247,5.00073036 126.541641,5.12008811 126.828099,5.3588034 C129.907518,8.199522 131.876918,10.2285975 132.736301,11.44603 C132.903402,11.6370026 132.986953,11.8995894 132.986953,12.2337903 C132.986953,12.5202492 132.891467,12.7947709 132.700494,13.0573576 C132.342421,13.558659 131.733699,14.3523846 130.874324,15.4385366 C130.01495,16.5246907 129.37042,17.3661626 128.940733,17.9629567 C129.561392,19.1565321 130.050757,20.3262332 130.40883,21.4720558 L136.961564,22.4746586 C137.271892,22.5224015 137.522544,22.671598 137.713515,22.9222483 C137.904487,23.1728979 137.999973,23.4533893 137.999973,23.7637181 L137.99998,23.7637588 Z" stroke="none" fill="#BAC5B4" fill-rule="evenodd"></path>
                </svg>
                <svg className="gear-bottom animate-spin animate-reverse" width="56px" height="56px" viewBox="82 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M116.981126,34.1478576 C118.771487,32.3574967 119.666669,30.1971213 119.666669,27.6667551 C119.666669,25.1363888 118.771487,22.9760071 116.981126,21.1856526 C115.190765,19.3952917 113.03039,18.5001101 110.500024,18.5001101 C107.969657,18.5001101 105.809276,19.3952917 104.018921,21.1856526 C102.22856,22.9760135 101.333379,25.1363888 101.333379,27.6667551 C101.333379,30.1971213 102.22856,32.3575031 104.018921,34.1478576 C105.809282,35.9382185 107.969657,36.8334 110.500024,36.8334 C113.03039,36.8334 115.190772,35.9382185 116.981126,34.1478576 L116.981126,34.1478576 Z M137.99998,23.7637588 L137.99998,31.7129712 C137.99998,31.99943 137.904494,32.2739518 137.713521,32.5365385 C137.522548,32.7991253 137.283834,32.9542908 136.997377,33.0020328 L130.373033,34.0046356 C129.919476,35.2936973 129.453982,36.3798471 128.97655,37.2631 C129.812053,38.4566754 131.089175,40.1038186 132.807915,42.2045041 C133.04663,42.4909629 133.165989,42.7893568 133.165989,43.0996856 C133.165989,43.4100144 133.058567,43.6845383 132.843723,43.923253 C132.199193,44.8064995 131.01755,46.0955697 129.298797,47.7904443 C127.580046,49.4853253 126.458079,50.3327669 125.932918,50.3327669 C125.646459,50.3327669 125.33613,50.225345 125.001929,50.010501 L120.060525,46.1433096 C119.01018,46.6923552 117.924024,47.1459124 116.802061,47.5039855 C116.420118,50.7505149 116.07398,52.9705716 115.763651,54.1641341 C115.59655,54.832536 115.166863,55.1667369 114.474589,55.1667369 L106.525377,55.1667369 C106.191176,55.1667369 105.89875,55.0652831 105.6481,54.8623756 C105.39745,54.659468 105.260189,54.4028487 105.236317,54.0925199 L104.233715,47.5039812 C103.064011,47.1220382 101.989788,46.6804138 101.011055,46.1791124 L95.9622362,50.0104775 C95.7235215,50.2253221 95.4251277,50.3327434 95.0670547,50.3327434 C94.7328537,50.3327434 94.4344599,50.20145 94.1718731,49.9388633 C91.1640648,47.2175159 89.1946641,45.2123103 88.2636712,43.9232465 C88.0965701,43.6845319 88.0130195,43.410008 88.0130195,43.0996792 C88.0130195,42.8132203 88.1085058,42.5386986 88.2994783,42.2761119 C88.6575514,41.7748105 89.266274,40.9810848 90.1256485,39.8949329 C90.9850229,38.8087788 91.6295527,37.9673068 92.0592399,37.3705127 C91.4147101,36.1769374 90.9253437,34.9953013 90.5911428,33.8255873 L84.038409,32.8587916 C83.7280802,32.8110487 83.4774284,32.6618522 83.2864558,32.4112019 C83.0954833,32.1605523 82.999997,31.8800609 82.999997,31.5697321 L82.999997,23.6205197 C82.999997,23.3340608 83.0954833,23.0595391 83.2864558,22.7969524 C83.4774284,22.5343656 83.7042081,22.3792001 83.9667927,22.3314581 L90.6269413,21.3288553 C90.9611422,20.2307662 91.4266365,19.1326686 92.0234242,18.0345859 C91.0685635,16.6739101 89.7914326,15.0267775 88.1920592,13.0931818 C87.9533446,12.806723 87.8339862,12.5202663 87.8339862,12.2338074 C87.8339862,11.9950928 87.9414081,11.7205689 88.1562521,11.4102401 C88.7769119,10.5508656 89.9525848,9.26776078 91.6832751,7.56095118 C93.413961,5.85413516 94.5418961,5.00072608 95.0670568,5.00072608 C95.3773856,5.00072608 95.6877166,5.12008383 95.9980454,5.35879912 L100.939449,9.19016414 C101.989794,8.64111853 103.075951,8.18756135 104.197914,7.82948831 C104.579857,4.58295888 104.925995,2.3629022 105.236324,1.16933967 C105.403425,0.500937814 105.833111,0.166736884 106.525385,0.166736884 L114.474598,0.166736884 C114.808799,0.166736884 115.101225,0.268190662 115.351875,0.471098216 C115.602524,0.674005771 115.739785,0.93062503 115.763657,1.24095385 L116.76626,7.82949259 C117.935963,8.21143559 119.010187,8.65305993 119.98892,9.15436133 L125.073543,5.32299631 C125.288388,5.10815163 125.574845,5.00073036 125.932918,5.00073036 C126.243247,5.00073036 126.541641,5.12008811 126.828099,5.3588034 C129.907518,8.199522 131.876918,10.2285975 132.736301,11.44603 C132.903402,11.6370026 132.986953,11.8995894 132.986953,12.2337903 C132.986953,12.5202492 132.891467,12.7947709 132.700494,13.0573576 C132.342421,13.558659 131.733699,14.3523846 130.874324,15.4385366 C130.01495,16.5246907 129.37042,17.3661626 128.940733,17.9629567 C129.561392,19.1565321 130.050757,20.3262332 130.40883,21.4720558 L136.961564,22.4746586 C137.271892,22.5224015 137.522544,22.671598 137.713515,22.9222483 C137.904487,23.1728979 137.999973,23.4533893 137.999973,23.7637181 L137.99998,23.7637588 Z" stroke="none" fill="#BAC5B4" fill-rule="evenodd"></path>
                </svg>
            </div>
            <span className="text">{title}</span>
        </div>

    );
  }
}

LoadingIndicator.propTypes = {
    title: PropTypes.string
};

LoadingIndicator.defaultProps = {
    title: ""
};

export default LoadingIndicator;
