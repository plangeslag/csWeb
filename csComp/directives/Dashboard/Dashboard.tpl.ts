module Dashboard { export var html = '<div gridster="gridsterOptions" style="width:100%; height:100%;pointer-events: none">    <div  style="position:relative;width:100%; height:100%;pointer-events: none">        <ul style="padding:0;pointer-events: none">            <li gridster-item="widget" ng-repeat="widget in dashboard.widgets" class="widget-parent">                <div class="widget-title" ng-click="widget.collapse=!widget.collapse" ><span class="fa fa-area-chart" style="float:left;margin-right:4px"></span>{{widget.title}}</div>                <div class="widget-edit" style="z-index: 1000">                    <div ng-show="widget.dashboard.editMode" ng-click="vm.$dashboardService.editWidget(widget)" class="fa fa-pencil widget-button"></div>                    <div ng-hide="widget.collapse" ng-click="widget.collapse=true"  class="fa fa-minus-square-o widget-button"></div>                    <div ng-show="widget.collapse" ng-click="widget.collapse=false"  class="fa fa-plus-square-o widget-button"></div>                    <div ng-show="widget.allowFullscreen" ng-click="vm.popup(widget)"  class="fa fa-square-o widget-button"></div>                </div>                    <div class="box" ng-hide="widget.collapse" style="top: 0;position: absolute;width:100%;height:100%;">                        <div id="{{widget.elementId}}" class="box-content" style="width:100%;height:100%">                         </div>                    </div>            </li>        </ul>    </div></div>'; }