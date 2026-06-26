using System;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Syncfusion.Blazor.Grids;

namespace ColumnValidationGanttRemoteData
{
    public class GanttRemoteCustomValidator : ComponentBase, IDisposable
    {
        [Parameter]
        public ValidatorTemplateContext context { get; set; }

        private ValidationMessageStore messageStore;

        [CascadingParameter]
        private EditContext CurrentEditContext { get; set; }

        protected override void OnInitialized()
        {
            if (CurrentEditContext is null)
                throw new InvalidOperationException($"{nameof(GanttRemoteCustomValidator)} requires a cascading {nameof(EditContext)}.");

            messageStore = new ValidationMessageStore(CurrentEditContext);

            CurrentEditContext.OnValidationRequested += ValidateRequested;
            CurrentEditContext.OnFieldChanged += ValidateField;
        }

        private void ValidateRequested(object sender, ValidationRequestedEventArgs args)
        {
            var task = (context?.EditContext?.Model ?? CurrentEditContext.Model) as TaskData;
            if (task is null)
                return;

            HandleValidation(new FieldIdentifier(task, nameof(TaskData.Name)));
            HandleValidation(new FieldIdentifier(task, nameof(TaskData.StartDate)));
            HandleValidation(new FieldIdentifier(task, nameof(TaskData.EndDate)));
            HandleValidation(new FieldIdentifier(task, nameof(TaskData.CompletionPercent)));
        }

        private void ValidateField(object sender, FieldChangedEventArgs args)
        {
            HandleValidation(args.FieldIdentifier);
        }

        private void HandleValidation(FieldIdentifier identifier)
        {
            messageStore.Clear(identifier);

            var task = (context?.EditContext?.Model ?? CurrentEditContext.Model) as TaskData;
            if (task is null)
                return;

            void AddError(string gridField, string message)
            {
                messageStore.Add(identifier, message);
                context?.ShowValidationMessage(gridField, false, message);
            }

            void ClearGridMessage(string gridField)
            {
                context?.ShowValidationMessage(gridField, true, null);
            }

            switch (identifier.FieldName)
            {
                case nameof(TaskData.Name):
                    var gridFieldName = "Name";
                    if (string.IsNullOrWhiteSpace(task.Name))
                        AddError(gridFieldName, "Project Activity is required.");
                    else if (task.Name.Length < 3)
                        AddError(gridFieldName, "Project Activity must be at least 3 characters.");
                    else if (task.Name.Length > 10)
                        AddError(gridFieldName, "Project Activity cannot exceed 10 characters.");
                    else if (!Regex.IsMatch(task.Name, @"^[\w\s\-]+$"))
                        AddError(gridFieldName, "Only letters, numbers, spaces, and hyphens are allowed.");
                    else
                        ClearGridMessage(gridFieldName);
                    break;

                case nameof(TaskData.StartDate):
                    var gridFieldStart = "StartDate";
                    if (task.StartDate < new DateTime(2020, 1, 1) || task.StartDate > DateTime.Today)
                        AddError(gridFieldStart, "Planned Start Date must be between 01-Jan-2020 and today.");
                    else
                        ClearGridMessage(gridFieldStart);
                    break;

                case nameof(TaskData.EndDate):
                    var gridFieldEnd = "EndDate";
                    if (task.EndDate < new DateTime(2020, 1, 1) || task.EndDate > DateTime.Today)
                        AddError(gridFieldEnd, "Planned End Date must be between 01-Jan-2020 and today.");
                    else
                        ClearGridMessage(gridFieldEnd);
                    break;

                case nameof(TaskData.CompletionPercent):
                    var gridFieldProgress = "CompletionPercent";
                    if (task.CompletionPercent < 5)
                        AddError(gridFieldProgress, "Progress must be greater than 5.");
                    else if (task.CompletionPercent > 50)
                        AddError(gridFieldProgress, "Progress must be lesser than 50.");
                    else
                        ClearGridMessage(gridFieldProgress);
                    break;
            }

            CurrentEditContext.NotifyValidationStateChanged();
        }

        public void Dispose()
        {
            if (CurrentEditContext != null)
            {
                CurrentEditContext.OnValidationRequested -= ValidateRequested;
                CurrentEditContext.OnFieldChanged -= ValidateField;
            }
        }
    }
}
