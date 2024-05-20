using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE_NexusEvents.Migrations
{
    /// <inheritdoc />
    public partial class colum_address_venue : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Spaces");
        }
    }
}
