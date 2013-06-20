namespace AwesomeApp.Models
{
    public interface IAttendee : IIdentifiable
    {
        string FirstName { get; set; }
        string LastName { get; set; }
    }
}