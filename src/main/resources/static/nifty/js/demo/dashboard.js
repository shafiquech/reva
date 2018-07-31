
// Dashboard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).on('nifty.ready', function() {

    // NETWORK CHART
    // =================================================================
    // Require Flot Charts
    // -----------------------------------------------------------------
    // http://www.flotcharts.org/
    // =================================================================

    var dwData = [[1, 24], [2, 34], [3, 33], [4, 22], [5, 28], [6, 60], [7, 60], [8, 70], [9, 67], [10, 86], [11, 86], [12, 113], [13, 130], [14, 114], [15, 80], [16, 109], [17, 100], [18, 105], [19, 110], [20, 102], [21, 107], [22, 60], [23, 67], [24, 76], [25, 73], [26, 94], [27, 135], [28, 154], [29, 120], [30, 100], [31, 130], [32, 100], [33, 60], [34, 70], [35, 67], [36, 86], [37, 86], [38, 113], [39, 130], [40, 114], [41, 80], [42, 109], [43, 100], [44, 105], [45, 110], [46, 102], [47, 107], [48, 60], [49, 67], [50, 76], [51, 73], [52, 94], [53, 79]],
        upData = [[1, 2], [2, 22], [3, 7], [4, 6], [5, 17], [6, 15], [7, 17], [8, 7], [9, 18], [10, 18], [11, 18], [12, 29], [13, 23], [14, 10], [15, 22], [16, 7], [17, 6], [18, 17], [19, 15], [20, 17], [21, 7], [22, 18], [23, 18], [24, 18], [25, 29], [26, 13], [27, 2], [28, 22], [29, 7], [30, 6], [31, 17], [32, 15], [33, 17], [34, 7], [35, 18], [36, 18], [37, 18], [38, 29], [39, 23], [40, 10], [41, 22], [42, 7], [43, 6], [44, 17], [45, 15], [46, 17], [47, 7], [48, 18], [49, 18], [50, 18], [51, 29], [52, 13], [53, 24]];

    var plot = $.plot('#demo-chart-network', [
        {
            label: 'Recieved Vehicles',
            data: dwData,
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.2
                    }, {
                        opacity: 0.2
                    }]
                }
            },
            points: {
                show: false
            }
        },
        {
            label: 'Delivered Vehicles',
            data: upData,
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.9
                    }, {
                        opacity: 0.9
                    }]
                }
            },
            points: {
                show: false
            }
        }
        ], {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            shadowSize: 0 // Drawing is faster without shadows
        },
        colors: ['#117db7','#25476a'],
        legend: {
            show: true,
            position: 'nw',
            margin: [0, 0]
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
        },
        yaxis: {
            show: false,
            ticks: 5,
            tickColor: 'rgba(0,0,0,.1)'
        },
        xaxis: {
            show: true,
            ticks: 10,
            tickColor: 'transparent'
        },
        tooltip: {
            show: true,
            content: "<div class='flot-tooltip text-center'><h5 class='text-main'>%s</h5>%y.0 Vehicles</div>"
        }
    });






    // HDD USAGE - SPARKLINE LINE AREA CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var hddSparkline = function() {
        $("#demo-sparkline-area").sparkline([57,69,70,62,73,79,76,77,73,52,57,50,60,55,70,68,57,62,53,69,59,67,69,58,50,47,65], {
            type: 'line',
            width: '100%',
            height: '60',
            spotRadius: 4,
            lineWidth: 2,
            lineColor:'rgba(255,255,255,.85)',
            fillColor: 'rgba(0,0,0,0.1)',
            spotColor: 'rgba(255,255,255,.5)',
            minSpotColor: 'rgba(255,255,255,.5)',
            maxSpotColor: 'rgba(255,255,255,.5)',
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Vehicle',
            //tooltipSuffix:' %'

        });
    }



    // EARNING - SPARKLINE LINE CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var earningSparkline = function(){
        $("#demo-sparkline-line").sparkline([945, 754, 805, 855, 678, 987, 1026, 885, 878, 922, 875, ], {
            type: 'line',
            width: '100%',
            height: '60',
            spotRadius: 0,
            lineWidth: 2,
            lineColor: '#ffffff',
            fillColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            highlightLineColor: '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Vehicle',
            //tooltipPrefix: '$ ',
            spotColor: '#ffffff',
            valueSpots: {
                '0:': '#ffffff'
            }
        });
    }



    // SALES - SPARKLINE BAR CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================

    var barEl = $("#demo-sparkline-bar");
    var barValues = [40,32,65,53,62,55,24,67,45,70,45,56,34,67,76,32,65,53,62,55,24,67,45,70,45,56,70,45,56,34,67,76,32,65,53];
    var barValueCount = barValues.length;
    var barSpacing = 1;
    var salesSparkline = function(){
         barEl.sparkline(barValues, {
            type: 'bar',
            height: 78,
            barWidth: Math.round((barEl.parent().width() - ( barValueCount - 1 ) * barSpacing ) / barValueCount),
            barSpacing: barSpacing,
            zeroAxis: false,
            tooltipChartTitle: 'Vehicle',
            //tooltipSuffix: ' Sales',
            barColor: 'rgba(0,0,0,.15)'
        });
    }


    $(window).on('resizeEnd', function(){
        hddSparkline();
        earningSparkline();
        salesSparkline();
    })
    hddSparkline();
    earningSparkline();
    salesSparkline();





    // PANEL OVERLAY
    // =================================================================
    // Require Nifty js
    // -----------------------------------------------------------------
    // http://www.themeon.net
    // =================================================================
    $('#demo-panel-network-refresh').niftyOverlay({
        iconClass : 'demo-psi-repeat-2 spin-anim icon-2x'
    }).on('click', function(){
        var $el = $(this), relTime;

        $el.niftyOverlay('show');


        relTime = setInterval(function(){
            $el.niftyOverlay('hide');
            clearInterval(relTime);
        },2000);
    });


});


/*
Morris.Donut({
        element: 'car-wash-morris-donut',
        data: [
            {label: 'Waiting Service', value: 2},
            {label: 'In Progress', value: 1},
            {label: 'Diagnostic', value: 1},
            {label: 'Job Stoppage', value: 1},
        ],
        colors: [
            '#1B5766',
            '#BFD454',
            '#B09230',
            '#F56AEA'
        ],
        resize:true
    });
Morris.Donut({
        element: 'egj-morris-donut',
        data: [
            {label: 'Waiting Service', value: 2},
            {label: 'In Progress', value: 1},
            {label: 'Diagnostic', value: 2},
            {label: 'Job Stoppage', value: 1},
        ],
        colors: [
            '#1B5766',
            '#BFD454',
            '#B09230',
            '#F56AEA'
        ],
        resize:true
    });
Morris.Donut({
        element: 'parking-morris-donut',
        data: [
            {label: 'Waiting Service', value: 1},
            {label: 'Job Stoppage', value: 1},
            {label: 'Job Finished', value: 2},
            {label: 'Ready for delivery', value: 2},
            
        ],
        colors: [
            '#2b7198',
            '#F56AEA',
            '#2148E2',
            '#4C794A'
        ],
        resize:true
    });
Morris.Donut({
        element: 'reception-morris-donut',
        data: [
        {label: 'Tagged', value: 4},
        {label: 'Recieved', value: 6},
        {label: 'Waiting', value: 10},
            
            
        ],
        colors: [
            '#5D35C4',
            '#DDE31E',
            '#1B5766'
        ],
        // resize:true
    });
Morris.Donut({
        element: 'workshop-morris-donut',
        data: [
            {label: 'Car Wash', value: 4}
           
        ],
        colors: [
            '#601919',
        ],
        // resize:true
    });

Morris.Donut({
        element: 'delivery-morris-donut',
        data: [
            {label: 'Delivery', value: 5}
            
        ],
        colors: [
           '#4C794A',
           
        ],
        // resize:true
    });
*/

// MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-morris-bar',
        data: [
            { y: '1', a: 100, b: 90 },
            { y: '2', a: 75,  b: 65 },
            { y: '3', a: 20,  b: 15 },
            { y: '5', a: 50,  b: 40 },
            { y: '6', a: 75,  b: 95 },
            { y: '7', a: 15,  b: 65 },
            { y: '8', a: 70,  b: 100 },
            { y: '9', a: 100, b: 70 },
            { y: '10', a: 50, b: 70 },
            { y: '11', a: 20, b: 10 },
            { y: '12', a: 40, b: 90 },
            { y: '13', a: 70, b: 30 },
            { y: '14', a: 50, b: 50 },
            { y: '15', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        gridTextColor: '#8f9ea6',
        gridTextSize: '11px',
        barColors: ['#1abc9c', '#d8e8e5'],
        resize:true,
        hideHover: 'auto'
    });

    $("#demo-gallery").unitegallery({
        tile_enable_shadow: false
    });