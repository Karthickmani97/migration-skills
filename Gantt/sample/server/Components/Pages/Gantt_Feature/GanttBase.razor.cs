using SyncfusionBlazorApp.Data;
using Microsoft.AspNetCore.Components;
using Syncfusion.Blazor.Gantt;
using Syncfusion.Blazor.Grids;
using Syncfusion.Blazor.TreeGrid;
using Gantt = Syncfusion.Blazor.Gantt;
using Syncfusion.Blazor;
namespace SyncfusionBlazorApp.Components.Pages.Gantt_Feature
{
    public partial class GanttBase
    {
        [Parameter] public bool AllowExcelExport { get; set; }
        [Parameter] public bool AllowFiltering { get; set; }
        [Parameter] public bool AllowReordering { get; set; }
        [Parameter] public bool AllowResizing { get; set; }
        [Parameter] public bool AllowRowDragAndDrop { get; set; }
        [Parameter] public bool AllowSorting { get; set; }
        [Parameter] public bool AllowSelection { get; set; }
        [Parameter] public bool AllowUnscheduledTasks { get; set; }
        [Parameter] public string BaselineColor { get; set; } = "#FFA500";
        [Parameter] public bool CollapseAllParentTasks { get; set; }
        [Parameter] public string[] ColumnMenuItems { get; set; } = new string[] { };
        [Parameter] public object ContextMenuItems { get; set; }
        [Parameter] public Syncfusion.Blazor.TreeGrid.CopyHierarchyType CopyHierarchyMode { get; set; } = Syncfusion.Blazor.TreeGrid.CopyHierarchyType.Parent;
        [Parameter] public string Height { get; set; } = "300px";
        [Parameter] public bool HighlightWeekends { get; set; }
        [Parameter] public string ID { get; set; }
        [Parameter] public bool IncludeWeekend { get; set; }
        [Parameter] public string Locale { get; set; } = "en-US";
        [Parameter] public DateTime? ProjectEndDate { get; set; }
        [Parameter] public DateTime? ProjectStartDate { get; set; }
        [Parameter] public bool RenderBaseline { get; set; }
        [Parameter] public int RowHeight { get; set; } = 36;
        [Parameter] public bool ScrollToTaskbarOnClick { get; set; }
        [Parameter] public bool ShowInlineNotes { get; set; }
        [Parameter] public bool ShowOverallocation { get; set; }
        [Parameter] public int? TaskbarHeight { get; set; }
        [Parameter] public object Toolbar { get; set; } = new List<string>() { "Add", "Cancel", "CollapseAll", "Delete", "Edit", "ExpandAll", "NextTimeSpan", "PrevTimeSpan", "Search", "Update", "Indent", "Outdent" };
        [Parameter] public string Width { get; set; } = "100%";
        [Parameter] public string[] WorkWeek { get; set; } = new string[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };
        [Parameter] public bool ShowColumnMenu { get; set; }
        [Parameter] public bool ShowColumnChooser { get; set; }
        [Parameter] public ScheduleMode TaskMode { get; set; }
        [Parameter] public WorkUnit WorkUnit { get; set; }
        [Parameter] public bool EnableRtl { get; set; }
        [Parameter] public bool EnableContextMenu { get; set; }
        [Parameter] public bool EnablePersistence { get; set; }
        [Parameter] public bool EnablePredecessorValidation { get; set; }
        [Parameter] public bool EnableCriticalPath { get; set; }
        [Parameter] public bool EnableRowVirtualization { get; set; }
        [Parameter] public bool EnableTimelineVirtualization { get; set; }
        [Parameter] public bool EnableColumnVirtualization { get; set; }
        [Parameter] public DurationUnit DurationUnit { get; set; }
        [Parameter] public GanttZoomTimelineSettings[] CustomZoomingLevels { get; set; }
        [Parameter] public bool LoadChildOnDemand { get; set; }
        [Parameter] public List<DependencyType> DependencyTypes { get; set; } = new List<DependencyType> { DependencyType.FS, DependencyType.SS, DependencyType.FF, DependencyType.SF };
        [Parameter] public int FrozenColumns { get; set; }
        [Parameter] public Syncfusion.Blazor.Gantt.GridLine GridLines { get; set; }
        [Parameter] public ViewType ViewType { get; set; }
        [Parameter] public List<GanttDataModel.CustomTaskDataModel> DataSource { get; set; }
        [Parameter] public int TreeColumnIndex { get; set; }

        [Parameter] public bool EditAllowAdding { get; set; }
        [Parameter] public bool EditAllowEditing { get; set; }
        [Parameter] public bool EditAllowDeleting { get; set; }
        [Parameter] public bool EditAllowTaskbarEditing { get; set; }

        [Parameter] public Syncfusion.Blazor.Gantt.RowPosition EditRowPosition { get; set; } = Syncfusion.Blazor.Gantt.RowPosition.Top;
        [Parameter] public bool EditShowConfirmDialog { get; set; }
        [Parameter] public Syncfusion.Blazor.Gantt.EditMode EditingMode { get; set; } = Syncfusion.Blazor.Gantt.EditMode.Auto;
        [Parameter] public bool EditAllowSchedulingOnDrag { get; set; }
        [Parameter] public bool ShowTimelineTooltip { get; set; } = true;

        [Parameter] public int TimelineUnitSize { get; set; } = 33;

        [Parameter] public TimelineViewMode TimelineViewMode { get; set; } = TimelineViewMode.Week;
        [Parameter] public int TimelineWeekStartDay { get; set; } = 0;
        [Parameter] public bool TimelineUpdateTimescaleView { get; set; } = true;
        [Parameter] public int TimelineTopTierCount { get; set; } = 1;
        [Parameter] public string TimelineTopTierFormat { get; set; } = "MMM dd, yyyy";
        [Parameter] public TimelineViewMode TimelineTopTierUnit { get; set; } = TimelineViewMode.Week;
        [Parameter] public int TimelineBottomTierCount { get; set; } = 1;
        [Parameter] public string TimelineBottomTierFormat { get; set; } = "dd";
        [Parameter] public TimelineViewMode TimelineBottomTierUnit { get; set; } = TimelineViewMode.Day;
        [Parameter] public bool IsHierarchy { get; set; } = false;
        [Parameter] public bool IsEditDialogFieldsEnable { get; set; } = false;
        [Parameter] public bool IsAddDialogFieldsEnable { get; set; } = false;
        [Parameter] public bool IsEventmarkersEnable { get; set; } = false;
        [Parameter] public bool IsHolidayEnable { get; set; } = false;
        [Parameter] public bool IsFilterSettingsEnable { get; set; } = false;
        [Parameter] public bool IsTaskLabelEnable { get; set; } = false;
        [Parameter] public bool IsSearchSettingsEnable { get; set; } = false;
        [Parameter] public bool EnableSortDescriptors { get; set; } = false;
        [Parameter] public bool IsTaskbarSettingsEnable { get; set; } = false;
        [Parameter] public bool IsSelectionSettingsEnable { get; set; } = false;
        [Parameter] public bool SplitterSettingsColumn{ get; set; } = false;
        [Parameter] public bool IsTimelineSettingsEnable { get; set; } = false;
        [Parameter] public string SplitterPosition { get; set; } = "38%";
        [Parameter] public SelectionMode SelectionMode { get; set; } = SelectionMode.Both;
        [Parameter] public SelectionType SelectionType { get; set; } = SelectionType.Single;
        [Parameter] public Gantt.FilterHierarchyMode FilterHierarchyMode { get; set; } = Gantt.FilterHierarchyMode.Parent;
        [Parameter] public bool AllowDragSelection { get; set; } = false;
        [Parameter] public bool FilterIgnoreAccent { get; set; } = false;
        [Parameter] public bool SearchIgnoreAccent { get; set; } = false;
        [Parameter] public bool SearchIgnoreCase { get; set; } = false;
        [Parameter] public string RightLabel { get; set; } = "TaskName";
        [Parameter] public string LeftLabel { get; set; } = "TaskName";
        [Parameter] public string TaskLabel { get; set; } = "Progress";
        [Parameter] public string[] SearchFields { get; set; } = new string[] { "TaskName", "StartDate", "EndDate", "Duration", "Progress" };
        [Parameter] public Gantt.FilterHierarchyMode SearchHierarchyMode { get; set; } = Gantt.FilterHierarchyMode.Parent;
        [Parameter] public Operator SearchOperator { get; set; } = Operator.Contains;
        [Parameter] public bool AllowUnsort { get; set; } = false;
        [Parameter] public string SortField { get; set; } = "TaskName";
        [Parameter] public SortDirection SortDirection { get; set; } = SortDirection.Descending;
        [Parameter] public bool AllowTaskbarDragAndDrop { get; set; } = false;
        [Parameter] public bool EnableMultiTaskbar { get; set; } = false;
        [Parameter] public int SlackValue { get; set; } = 0;
        [Parameter] public double DayWorkTimeFrom { get; set; } = 8;
        [Parameter] public double DayWorkTimeTo { get; set; } = 17;
        [Parameter] public bool ShowTooltip { get; set; } = true;
        [Parameter] public bool ShowTooltipOnEditing { get; set; } = true;
        [Parameter] public int SplitterColumnIndex { get; set; } = -1;
        [Parameter] public int SplitterSeperatorSize { get; set; } = 4;
        [Parameter] public SplitterView SplitterView { get; set; } = SplitterView.Default;
        [Parameter] public bool IsSplitterCollapsible { get; set; } = false;
        [Parameter] public string SplitterMinimumWidth { get; set; } = "50px";
        [Parameter] public bool EnableSplitTask { get; set; } = false;
        private static List<GanttDataModel.AssignmentModel> AssignmentCollection { get; set; }
        private List<GanttDataModel.ResourceInfoModel> ResourceCollection { get; set; }
        private List<GanttDataModel.SegmentModel> SegmentCollection { get; set; }
        public static SfGantt<GanttDataModel.CustomTaskDataModel> ganttChartInstance;

        public string EventMessage { get; set; }
        public string ErrorMessage { get; set; }
        protected override void OnInitialized()
        {
            ResourceCollection = GanttDataModel.GetResources;
            AssignmentCollection = GanttDataModel.GetAssignmentCollection();
            SegmentCollection = GanttDataModel.GetSegmentCollection();
        }

        private async Task OnCreatedHandler(object args)
        {
            EventMessage += "Created: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnLoadHandler(object args)
        {
            EventMessage += "OnLoad: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnDestroyedHandler(object args)
        {
            EventMessage += "Destroyed: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnSplitterResizeStartHandler(Syncfusion.Blazor.Layouts.ResizeEventArgs args)
        {
            EventMessage += "SplitterResizeStart: Event triggered\n" + args.Name + "\n"; 
            await Task.CompletedTask;
        }

        private async Task OnSplitterResizedHandler(Syncfusion.Blazor.Layouts.ResizingEventArgs args)
        {
            EventMessage += "SplitterResized: Event triggered\n" + args.Name + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSplitterResizingHandler(Syncfusion.Blazor.Layouts.ResizingEventArgs args)
        {
            EventMessage += "SplitterResizing: Event triggered\n" + args.Name + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSplitterCreatedHandler(object args)
        {
            EventMessage += "SplitterCreated: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnActionFailureHandler(Syncfusion.Blazor.Grids.FailureEventArgs args)
        {
            ErrorMessage += "OnActionFailure: Event triggered\n ErrorMessage" + args.Error + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnToolbarClickHandler(Syncfusion.Blazor.Navigations.ClickEventArgs args)
        {
            EventMessage += "OnToolbarClick: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnTaskbarEditedHandler(TaskbarEditedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "TaskbarEdited: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnEndEditHandler(TaskbarEditedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "EndEdit: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellEditHandler(CellEditArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "OnCellEdit: Event triggered\n" + args.Value + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellSaveHandler(CellSaveArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "OnCellSave: Event triggered\n" + args.Value + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnCellSavedHandler(CellSavedArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "CellSaved: Event triggered\n" + args.Value + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellSelectedHandler(CellSelectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "CellSelected: Event triggered\n" + args.CellIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellSelectingHandler(CellSelectingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "CellSelecting: Event triggered\n" + args.CellIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellDeselectingHandler(CellDeselectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "CellDeselecting: Event triggered\n" + args.CellIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCellDeselectedHandler(CellDeselectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "CellDeselected: Event triggered\n" + args.CellIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDeselectedHandler(RowDeselectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDeselected: Event triggered\n" + args.RowIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDeselectingHandler(RowDeselectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDeselecting: Event triggered\n" + args.RowIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowSelectedHandler(RowSelectEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowSelected: Event triggered\n" + args.RowIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowSelectingHandler(RowSelectingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowSelecting: Event triggered\n" + args.RowIndex + "\n";
            await Task.CompletedTask;
        }

        private async Task OnActionBeginHandler(GanttActionEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "OnActionBegin: Event triggered\n Action: " + args.Action + " Request type: " + args.RequestType + "\n";
            await Task.CompletedTask;
        }

        private async Task OnActionCompleteHandler(GanttActionEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "OnActionComplete: Event triggered\n Action: " + args.Action + " Request type: " +  args.RequestType + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnBeforeTooltipRenderHandler(BeforeTooltipRenderEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "BeforeTooltipRender: Event triggered\n" + args.Target + "\n";
            await Task.CompletedTask;
        }

        private async Task OnQueryChartRowInfoHandler(QueryChartRowInfoEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "QueryChartRowInfo: Event triggered\n" + args.TaskbarType + "\n";
            await Task.CompletedTask;
        }

        private async Task OnQueryCellInfoHandler(Syncfusion.Blazor.Grids.QueryCellInfoEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "QueryCellInfo: Event triggered\n" + args.Column + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnRowDataBoundHandler(Syncfusion.Blazor.Grids.RowDataBoundEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDataBound: Event triggered\n" + args.Data + "\n";
            await Task.CompletedTask;
        }

        private async Task OnContextMenuItemClickedHandler(Syncfusion.Blazor.Grids.ContextMenuClickEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "ContextMenuItemClicked: Event triggered\n" + args.Column + "\n";
            await Task.CompletedTask;
        }

        private async Task OnContextMenuOpenHandler(Syncfusion.Blazor.Grids.ContextMenuOpenEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "ContextMenuOpen: Event triggered\n" + args.Column + "\n";
            await Task.CompletedTask;
        }

        private async Task OnColumnMenuClickedHandler(Syncfusion.Blazor.Grids.ColumnMenuClickEventArgs args)
        {
            EventMessage += "ColumnMenuClicked: Event triggered\n" + args.Column + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDroppedHandler(Syncfusion.Blazor.Grids.RowDroppedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDropped: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDragStartingHandler(Syncfusion.Blazor.Grids.RowDragStartingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDragStarting: Event triggered\n" + args.Data + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnRowDroppingHandler(RowDroppingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDropping: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnExpandingHandler(Syncfusion.Blazor.TreeGrid.RowExpandingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "Expanding: Event triggered\n" + args.Data + "\n";
            await Task.CompletedTask;
        }

        private async Task OnExpandedHandler(Syncfusion.Blazor.TreeGrid.RowExpandedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "Expanded: Event triggered\n" + args.Data + "\n";
            await Task.CompletedTask;
        }

        private async Task OnCollapsingHandler(Syncfusion.Blazor.TreeGrid.RowCollapsingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "Collapsing: Event triggered\n" + args.Data + "\n"; ;
            await Task.CompletedTask;
        }

        private async Task OnCollapsedHandler(Syncfusion.Blazor.TreeGrid.RowCollapsedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "Collapsed: Event triggered\n" + args.Data + "\n";
            await Task.CompletedTask;
        }

        private async Task OnColumnResizeStartHandler(ResizeArgs args)
        {
            EventMessage += "ColumnResizeStart: Event triggered\n" + args.Column + "\n";
            await Task.CompletedTask;
        }

        private async Task OnColumnResizedHandler(ResizeArgs args)
        {
            EventMessage += "ColumnResized: Event triggered\n" + args.Column + "\n";
            await Task.CompletedTask;
        }

        private async Task OnTaskbarEditingHandler(TaskbarEditingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "TaskbarEditing: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnDataBoundHandler()
        {
            EventMessage += "DataBound: Event triggered\n";
            await Task.CompletedTask;
        }

        private async Task OnBeforeCopyHandler(BeforeCopyEventArgs args)
        {
            EventMessage += "BeforeCopy: Event triggered\n" + args.ClipboardText + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFreezeLineMovingHandler(FreezeLineMovingEventArgs args)
        {
            EventMessage += "FreezeLineMoving: Event triggered\n" + args.FrozenColumns + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFreezeLineMovedHandler(FreezeLineMovedEventArgs args)
        {
            EventMessage += "FreezeLineMoved: Event triggered\n" + args.FrozenColumns + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSortingHandler(SortingEventArgs args)
        {
            EventMessage += "Sorting: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSortedHandler(SortedEventArgs args)
        {
            EventMessage += "Sorted: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSearchingHandler(SearchingEventArgs args)
        {
            EventMessage += "Searching: Event triggered\n" + args.SearchText + "\n";
            await Task.CompletedTask;
        }

        private async Task OnSearchedHandler(SearchedEventArgs args)
        {
            EventMessage += "Searched: Event triggered\n" + args.SearchText + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowUpdatingHandler(GanttRowUpdatingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowUpdating: Event triggered\n" + args.PrimaryKeyValue + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowUpdatedHandler(GanttRowUpdatedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowUpdated: Event triggered\n" + args.PrimaryKeyValue + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFilteringHandler(FilteringEventArgs args)
        {
            EventMessage += "Filtering: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFilteredHandler(FilteredEventArgs args)
        {
            EventMessage += "Filtered: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFilterDialogOpeningHandler(FilterDialogOpeningEventArgs args)
        {
            EventMessage += "FilterDialogOpening: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnFilterDialogOpenedHandler(FilterDialogOpenedEventArgs args)
        {
            EventMessage += "FilterDialogOpened: Event triggered\n" + args.ColumnName + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDeletingHandler(GanttRowDeletingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDeleting: Event triggered\n" + args.Datas + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowDeletedHandler(GanttRowDeletedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowDeleted: Event triggered\n" + args.Datas + "\n";
            await Task.CompletedTask;
        }

        private async Task OnColumnReorderingHandler(ColumnReorderingEventArgs args)
        {
            EventMessage += "ColumnReordering: Event triggered\n" + args.ToColumn + "\n";
            await Task.CompletedTask;
        }

        private async Task OnColumnReorderedHandler(ColumnReorderedEventArgs args)
        {
            EventMessage += "ColumnReordered: Event triggered\n" + args.ToColumn + "\n";
            await Task.CompletedTask;
        }

        private async Task OnZoomingHandler(ZoomEventArgs args)
        {
            EventMessage += "Zooming: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnGanttDialogOpeningHandler(GanttDialogOpenEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "GanttDialogOpening: Event triggered\n" + args.Data + "\n";
            await Task.CompletedTask;
        }

        private async Task OnTaskConnectorChangingHandler(TaskConnectorChangeEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "TaskConnectorChanging: Event triggered\n" + args.PredecessorData + "\n";
            await Task.CompletedTask;
        }

        private async Task OnGanttDialogOpenedHandler(GanttDialogOpenedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "GanttDialogOpened: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnZoomedHandler(ZoomedEventArgs args)
        {
            EventMessage += "Zoomed: Event triggered\n" + args.Action + "\n";
            await Task.CompletedTask;
        }

        private async Task OnIndentationChangingHandler(IndentationChangingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "IndentationChanging: Event triggered\n" + args.IsIndent + "\n";
            await Task.CompletedTask;
        }

        private async Task OnIndentationChangedHandler(IndentationChangedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "IndentationChanged: Event triggered\n" + args.IsIndent + "\n";
            await Task.CompletedTask;
        }

        private async Task OnTaskConnectorChangedHandler(TaskConnectorChangedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "TaskConnectorChanged: Event triggered\n" + args.PredecessorData + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowCreatingHandler(GanttRowCreatingEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowCreating: Event triggered\n" + args.Index + "\n";
            await Task.CompletedTask;
        }

        private async Task OnRowCreatedHandler(GanttRowCreatedEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "RowCreated: Event triggered\n" + args.Index + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfQueryTaskbarInfoHandler(PdfQueryTaskbarInfoEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "PdfQueryTaskbarInfo: Event triggered\n" + args + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfQueryCellInfoHandler(Syncfusion.Blazor.Gantt.PdfQueryCellInfoEventArgs<GanttDataModel.CustomTaskDataModel> args)
        {
            EventMessage += "PdfQueryCellInfo: Event triggered\n" + args + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfColumnHeaderQueryCellInfoHandler(Syncfusion.Blazor.Gantt.PdfHeaderQueryCellInfoEventArgs args)
        {
            EventMessage += "PdfColumnHeaderQueryCellInfo: Event triggered\n" + args + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfQueryTimelineCellInfoHandler(PdfQueryTimelineCellInfoEventArgs args)
        {
            EventMessage += "PdfQueryTimelineCellInfo: Event triggered\n" + args + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfExportingHandler(PdfExportEventArgs args)
        {
            EventMessage += "PdfExporting: Event triggered\n" + args + "\n";
            await Task.CompletedTask;
        }

        private async Task OnPdfExportedHandler(PdfExportedEventArgs args)
        {
            EventMessage += "PdfExported: Event triggered\n FileName : " + args.FileName + "\n";
            await Task.CompletedTask;
        }
    }
}