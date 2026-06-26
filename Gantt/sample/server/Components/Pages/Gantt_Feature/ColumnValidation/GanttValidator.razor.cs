using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace ColumnValidationComponents
{
    public class SegmentModel
    {
        public int id { get; set; }
        public int TaskId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Need Duration")]
        [Range(10, 365, ErrorMessage = "Duration must be between 10 and 365 days.")]
        public double? Duration { get; set; }

    }
    public class TaskData : INotifyPropertyChanged
    {
        public int TaskId { get; set; }

        private string activityName;
        public string ActivityName
        {
            get => activityName;
            set
            {
                if (value != activityName)
                {
                    activityName = value;
                    NotifyPropertyChanged(nameof(ActivityName));
                }
            }
        }

        public int? Duration { get; set; }                  // int (not string)
        public string Predecessor { get; set; } = string.Empty;
        public int Progress { get; set; }
        public int Work { get; set; }
        public int? ParentId { get; set; }
        public string? Email { get; set; } = string.Empty;
        public string? Username { get; set; } = string.Empty;
        public string? Password { get; set; } = string.Empty;
        public string? Website { get; set; } = string.Empty;
        public string? CustomData { get; set; } = string.Empty;
        public string? Notes { get; set; } = string.Empty;
        public string? TaskType { get; set; } = string.Empty;
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? BaselineStartDate { get; set; }
        public DateTime? BaselineEndDate { get; set; }
        public DateTime? ReviewDate { get; set; }
        public decimal ProjectBudget { get; set; }

        public event PropertyChangedEventHandler? PropertyChanged;
        private void NotifyPropertyChanged(string propertyName)
            => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
    public class GanttData
    {
        public class TaskData
        {
            public int TaskId { get; set; }
            public string ActivityName { get; set; } = string.Empty;

            public int? Duration { get; set; }
            public string Predecessor { get; set; } = string.Empty;

            public int Progress { get; set; }
            public int Work { get; set; }
            public int? ParentId { get; set; }
            public string? Email { get; set; } = string.Empty;
            public string? Username { get; set; } = string.Empty;
            public string? Password { get; set; } = string.Empty;
            public string? Website { get; set; } = string.Empty;
            public string? CustomData { get; set; } = string.Empty;
            public string? Notes { get; set; } = string.Empty;
            public string? TaskType { get; set; } = string.Empty;

            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public DateTime? BaselineStartDate { get; set; }
            public DateTime? BaselineEndDate { get; set; }
            public DateTime? ReviewDate { get; set; }

            public decimal ProjectBudget { get; set; }

            public List<TaskData> SubTasks { get; set; }
        }
        public static List<SegmentModel> GetSegmentCollection()
        {
            List<SegmentModel> segments = new List<SegmentModel>();
            segments.Add(new SegmentModel() { id = 1, TaskId = 2, StartDate = new DateTime(2021, 04, 01), Duration = 1 });
            segments.Add(new SegmentModel() { id = 2, TaskId = 2, StartDate = new DateTime(2021, 03, 29), EndDate = new DateTime(2021, 03, 31) });
            segments.Add(new SegmentModel() { id = 3, TaskId = 3, StartDate = new DateTime(2021, 04, 01), Duration = 2 });
            segments.Add(new SegmentModel() { id = 4, TaskId = 3, StartDate = new DateTime(2021, 03, 29), EndDate = new DateTime(2021, 03, 31) });
            segments.Add(new SegmentModel() { id = 5, TaskId = 3, StartDate = new DateTime(2021, 04, 04), Duration = 3 });
            segments.Add(new SegmentModel() { id = 6, TaskId = 4, StartDate = new DateTime(2021, 04, 01), Duration = 1 });
            segments.Add(new SegmentModel() { id = 7, TaskId = 4, StartDate = new DateTime(2021, 03, 29), EndDate = new DateTime(2021, 03, 31) });
            segments.Add(new SegmentModel() { id = 8, TaskId = 8, StartDate = new DateTime(2021, 04, 01), EndDate = new DateTime(2021, 04, 03) });
            segments.Add(new SegmentModel() { id = 9, TaskId = 8, StartDate = new DateTime(2021, 04, 05), Duration = 1 });
            segments.Add(new SegmentModel() { id = 10, TaskId = 9, StartDate = new DateTime(2021, 03, 29), EndDate = new DateTime(2021, 03, 31) });
            segments.Add(new SegmentModel() { id = 11, TaskId = 9, StartDate = new DateTime(2021, 04, 01), Duration = 1 });
            segments.Add(new SegmentModel() { id = 12, TaskId = 12, StartDate = new DateTime(2021, 04, 05), Duration = 1 });
            segments.Add(new SegmentModel() { id = 13, TaskId = 12, StartDate = new DateTime(2021, 04, 07), Duration = 1 });
            segments.Add(new SegmentModel() { id = 14, TaskId = 14, StartDate = new DateTime(2021, 04, 01), EndDate = new DateTime(2021, 04, 02) });
            segments.Add(new SegmentModel() { id = 15, TaskId = 14, StartDate = new DateTime(2021, 04, 04), Duration = 2 });
            return segments;
        }

        
    }
}
